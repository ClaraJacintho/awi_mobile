import {
  FETCH_VIDEO_FAILURE,
  FETCH_VIDEO_SUCCESS,
  SAVE_DDL_VIDEO,
} from '../actions/actionTypes';
import {offlineActionTypes} from 'react-native-offline';

export default function coursesReducer(state = [], action) {
  switch (action.type) {
    case FETCH_VIDEO_SUCCESS:
      return action.videos;
    case FETCH_VIDEO_FAILURE:
      return action.error;
    case SAVE_DDL_VIDEO:
      return [...this.state.savedVideos, action.videoName];
    case offlineActionTypes.FETCH_OFFLINE_MODE:
      return state;
    default:
      return state;
  }
}
