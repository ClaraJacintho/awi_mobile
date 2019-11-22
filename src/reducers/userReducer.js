import {
  UPDATE_USER_DATA,
  UPDATE_USER_TOKEN,
  DELETE_USER_DATA,
} from '../actions/actionTypes';
import {offlineActionTypes} from 'react-native-offline';

export default function coursesReducer(state = {}, action) {
  switch (action.type) {
    case UPDATE_USER_DATA:
      return {
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        username: action.payload.username,
        role: action.payload.role,
      };
    case UPDATE_USER_TOKEN:
      return {
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        username: state.username,
        role: state.role,
      };
    case DELETE_USER_DATA:
      return {
        accessToken: undefined,
        refreshToken: undefined,
        username: undefined,
        role: undefined,
      };
    case offlineActionTypes.FETCH_OFFLINE_MODE:
      return state;
    default:
      return state;
  }
}
