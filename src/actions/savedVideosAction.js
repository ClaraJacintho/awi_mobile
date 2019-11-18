import {SAVE_DDL_VIDEO, REMOVE_DDL_VIDEO} from './actionTypes';

export const saveVideo = (videoName, subtitlesName) => {
  return {
    type: SAVE_DDL_VIDEO,
    payload: {
      videoName: videoName,
      subtitlesName: subtitlesName,
    },
  };
};

export const removeVideo = (videoName, subtitlesName) => {
  return {
    type: REMOVE_DDL_VIDEO,
    payload: {
      videoName: videoName,
      subtitlesName: subtitlesName,
    },
  };
};
