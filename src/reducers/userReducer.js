import {FETCH_USER_FAILURE, FETCH_USER_SUCCESS} from '../actions/actionTypes';
import {offlineActionTypes} from 'react-native-offline';

export default function coursesReducer(state = [], action) {
  switch (action.type) {
    case FETCH_USER_SUCCESS: {
      console.log(action);
      return action.key;
    }
    case FETCH_USER_FAILURE:
      return action.error;
    case offlineActionTypes.FETCH_OFFLINE_MODE:
      return state;
    default:
      return state;
  }
}
