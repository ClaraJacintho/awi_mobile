import {SAVE_DDL_VIDEO, REMOVE_DDL_VIDEO} from './actionTypes';

export const saveVideo = videoName => {
  return {
    type: SAVE_DDL_VIDEO,
    videoName,
  };
};

export const removeVideo = videoName => {
  return {
    type: REMOVE_DDL_VIDEO,
    videoName,
  };
};
