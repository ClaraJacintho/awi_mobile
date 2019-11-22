import {
  UPDATE_USER_DATA,
  UPDATE_USER_TOKEN,
  DELETE_USER_DATA,
} from './actionTypes';

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
