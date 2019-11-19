import axios from 'axios';
import apiconfig from '../config/connexion_config';
import {OAUTH_STATE_SAVE} from './actionTypes';

export const askToken = ({email, password}) => {
  return async dispatch => {
    try {
      const response = await axios.post(`${apiconfig.REACT_APP_API}/course`, {
        email: email,
        password: password,
      });
      dispatch(askTokenSuccess(response.data));
    } catch (error) {
      dispatch(askTokenFailure(error));
    }
  };
};

export const askTokenSuccess = data => {
  //We will receive this type of data : { user: student, token: token }
  return {
    type: GET_TOKEN,
    payload: {
      token: data.token,
    },
  };
};

export const askTokenFailure = error => {
  return {
    type: GET_TOKEN_FAILURE,
    payload: {
      error: error,
    },
  };
};

export const saveOAuthState = OAuthState => {
  return {
    type : OAUTH_STATE_SAVE,
    oAuthState: OAuthState,
  }
};
