import {FETCH_VIDEO_FAILURE, FETCH_VIDEO_SUCCESS} from '../actions/actionTypes';
import {offlineActionTypes} from 'react-native-offline';

export default function coursesReducer(state = [], action) {
  switch (action.type) {
    case FETCH_VIDEO_SUCCESS:
      return action.videos;
    case FETCH_VIDEO_FAILURE:
      return action.error;
    case offlineActionTypes.FETCH_OFFLINE_MODE:
      return state;
    default:
      return state;
  }
}
