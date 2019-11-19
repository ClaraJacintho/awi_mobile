import {CLIENT_ID, CLIENT_SECRET} from 'react-native-dotenv';
import axios from 'axios';

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
 * Parses the input URL and gets the params
 * @param {String} url the input URL
 * @return {Map<String, String>} the params in key value.
 */
function parseAuthURL(url) {
  let regex = /[?&]([^=#]+)=([^&#]*)/g,
    params = {};
  let match = [];
  while (match === regex.exec(url)) {
    params[match[1]] = match[2];
    console.log(match[1], match[2]);
  }
  return params;
}

/**
 * Gets the token from the auth.
 * @param {String} url the received URL.
 * @param {String} state the input state
 * @return {{access_token: String, refresh_token: String}} The tokens
 */
export function getToken(url, state) {
  const params = parseAuthURL(url);
  const code = params.code,
    receivedState = params.state;
  if (state !== receivedState) {
    throw new Error('States are not corresponding');
  } else {
    axios
      .post('https://oauth.igpolytech.fr/token', {
        code: code,
        client_id: CLIENT_ID,
      })
      .then(res => {
        console.log(res);
        return res.data;
      })
      .catch(err => console.log(err));
  }
}
