import {
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
  SET_USER_TOKEN,
} from '../actions/actionTypes';
import {offlineActionTypes} from 'react-native-offline';

export default function coursesReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_USER_SUCCESS: {
      return action.key;
    }
    case FETCH_USER_FAILURE:
      return action.error;
    case SET_USER_TOKEN:
      return {
        userId: state.userId,
        token: action.token,
        userName: state.userName,
      };
    case offlineActionTypes.FETCH_OFFLINE_MODE:
      return state;
    default:
      return state;
  }
}
