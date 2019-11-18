import {SET_CURR_VIDEO} from '../actions/actionTypes';

export default function currentVideoReducer(state = {}, action) {
  if (action.type === SET_CURR_VIDEO) {
    return {
      videoURI: action.payload.video,
      subtitlesURI: action.payload.subtitles,
    };
  } else {
    return state;
  }
}
