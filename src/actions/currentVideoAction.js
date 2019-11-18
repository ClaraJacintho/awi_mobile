import {SET_CURR_VIDEO} from './actionTypes';

export const setCurrentVideo = (video, subtitles) => {
  return {
    type: SET_CURR_VIDEO,
    payload: {
      video,
      subtitles,
    },
  };
};
