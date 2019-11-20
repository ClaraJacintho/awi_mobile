import {
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  UPDATE_USER_DATA,
  UPDATE_USER_TOKEN,
  DELETE_USER_DATA,
} from './actionTypes';
import axios from 'axios';

const apiUrl = 'https://polyteach-back.igpolytech.fr';

export const fetchUser = () => {
  function thunk(dispatch) {
    return axios
      .get(`${apiUrl}/ping`)
      .then(response => {
        dispatch(fetchUserSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchUserFailure(error));
      });
  }
  thunk.interceptInOffline = true;
  return thunk;
};

export const fetchUserSuccess = data => {
  return {
    type: FETCH_USER_SUCCESS,
    user: data.id,
  };
};

export const fetchUserFailure = error => {
  return {
    type: FETCH_USER_FAILURE,
    payload: {
      error,
    },
  };
};

export const updateUserData = (username, role, accessToken, refreshToken) => {
  return {
    type: UPDATE_USER_DATA,
    payload: {
      username,
      role,
      accessToken,
      refreshToken,
    },
  };
};

export const updateUserToken = (accessToken, refreshToken) => {
  return {
    type: UPDATE_USER_TOKEN,
    payload: {
      accessToken,
      refreshToken,
    },
  };
};

export const deleteUserData = () => {
  return {
    type: DELETE_USER_DATA,
  };
};
