import {SAVE_DDL_VIDEO} from './actionTypes';

export const saveVideo = videoName => {
  return {
    type: SAVE_DDL_VIDEO,
    videoName,
  };
};
