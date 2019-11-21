import {
  FETCH_COURSE_FAILURE,
  FETCH_COURSE_SUCCESS,
} from '../actions/actionTypes';
import {offlineActionTypes} from 'react-native-offline';

export default function coursesReducer(state = [], action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      console.log("course success" + action.courses)
      return action.courses;
    case FETCH_COURSE_FAILURE:
      return state;
    case offlineActionTypes.FETCH_OFFLINE_MODE:
      return state;
    default:
      return state;
  }
}
