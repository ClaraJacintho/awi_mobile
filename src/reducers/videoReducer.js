import {
  FETCH_COURSE_VIDEO_FAILURE,
  FETCH_COURSE_VIDEO_SUCCESS,
} from '../actions/actionTypes';
import {offlineActionTypes} from 'react-native-offline';

export default function videosReducer(state = [], action) {
  switch (action.type) {
    case FETCH_COURSE_VIDEO_SUCCESS:
      return action.payload.videos;
    case FETCH_COURSE_VIDEO_FAILURE:
      return [];
    case offlineActionTypes.FETCH_OFFLINE_MODE:
      return [];
    default:
      return state;
  }
}
