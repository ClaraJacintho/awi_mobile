import {SET_CURR_VIDEO} from '../actions/actionTypes';

export default function currentVideoReducer(state = {}, action) {
  switch (action.type) {
    case SET_CURR_VIDEO:
      return {
        videoURI: action.payload.video,
        subtitlesURI: action.payload.subtitles,
      };
    default:
      return state;
  }
}
