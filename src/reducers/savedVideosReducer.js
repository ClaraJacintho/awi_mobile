import {SAVE_DDL_VIDEO, REMOVE_DDL_VIDEO} from '../actions/actionTypes';
import {offlineActionTypes} from 'react-native-offline';

export default function savedVideosReducer(state = [], action) {
  switch (action.type) {
    case SAVE_DDL_VIDEO:
      return [
        ...state,
        {
          videoName: action.payload.videoName,
          subtitlesName: action.payload.subtitlesName,
        },
      ];
    case REMOVE_DDL_VIDEO:
      return state.filter(
        item =>
          item.videoName !== action.payload.videoName &&
          item.subtitlesName !== action.payload.subtitlesName,
      );
    case offlineActionTypes.FETCH_OFFLINE_MODE:
      return state;
    default:
      return state;
  }
}
