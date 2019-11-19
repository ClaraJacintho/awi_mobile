import {CLIENT_ID, CLIENT_SECRET} from 'react-native-dotenv';
import axios from 'axios';
import queryString from 'query-string';
import jwt from 'react-native-pure-jwt';

function createSecret(length) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

/**
 * Creates the OAuth URI
 * @return {{state: String, URI: String}} The params for the OAuth URI.
 */
export function getConnectionURI() {
  const secret = createSecret(20);
  const URI =
    'https://oauth.igpolytech.fr/authorize?client_id=' +
    CLIENT_ID +
    '&redirect_uri=polyteach%3A%2F%2Fapp&state=' +
    secret;
  return {
    URI: URI,
    state: secret,
  };
}

/**
 * Gets the token from the auth.
 * @param {String} url the received URL.
 * @param {String} state the input state
 * @return {Promise<{access_token: String, refresh_token: String}>} The tokens
 */
export function getToken(url, state) {
  return new Promise((resolve, reject) => {
    const params = queryString.parse(
      url.substring(url.indexOf('?'), url.length),
    );
    const code = params.code;
    const receivedState = params.state;
    if (state !== receivedState) {
      throw new Error('States are not corresponding');
    } else {
      axios
        .post('https://oauth.igpolytech.fr/token', {
          code: code,
          client_id: CLIENT_ID,
        })
        .then(res => resolve(res.data))
        .catch(err => reject(err));
    }
  });
}

/**
 * Decodes the given token, with the client secret.
 * @param {String} token the token to decode
 * @returns {JSON} the payload.
 */
export async function decodeToken(token) {
  const tok = await jwt.decode(token, CLIENT_SECRET, {skipValidation: false});
  return tok.payload;
}

/**
 * Checks if the current access token is valid, and if not, tries to ask for another one.
 * If none are valid, an error is thrown.
 * @param {String} accessToken the current access token.
 * @param {String} refreshToken the current refresh token.
 * @return {Promise<{validity:Boolean, token: String}>} The validity, and the current valid token.
 */
export async function checkTokenValidity(accessToken, refreshToken) {
  jwt
    .decode(accessToken, CLIENT_SECRET, {skipValidation: false})
    .then(() => ({validity: true, token: accessToken}))
    .catch(() => {
      axios
        .post('https://oauth.igpolytech.fr/refresh', {
          client_id: CLIENT_ID,
          refresh_token: refreshToken,
        })
        .then(res => {
          if (res.data.access_token !== null) {
            return {
              validity: false,
              token: res.data.access_token,
            };
          } else {
            throw new TypeError('Refresh token is invalid!');
          }
        });
    });
}
