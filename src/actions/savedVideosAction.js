import {SAVE_DDL_VIDEO, REMOVE_DDL_VIDEO} from './actionTypes';

export const saveVideo = (videoName, subtitlesName, courseName) => {
  return {
    type: SAVE_DDL_VIDEO,
    payload: {
      videoName: videoName,
      subtitlesName: subtitlesName,
      courseName: courseName,
    },
  };
};

export const removeVideo = (videoName, subtitlesName, courseName) => {
  return {
    type: REMOVE_DDL_VIDEO,
    payload: {
      videoName: videoName,
      subtitlesName: subtitlesName,
      courseName: courseName,
    },
  };
};
