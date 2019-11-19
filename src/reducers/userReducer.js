import {
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
  UPDATE_USER_DATA,
} from '../actions/actionTypes';
import {offlineActionTypes} from 'react-native-offline';

export default function coursesReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_USER_SUCCESS: {
      return action.key;
    }
    case FETCH_USER_FAILURE:
      return action.error;
    case UPDATE_USER_DATA:
      return {
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        username: action.payload.username,
        role: action.payload.role,
      };
    case offlineActionTypes.FETCH_OFFLINE_MODE:
      return state;
    default:
      return state;
  }
}
