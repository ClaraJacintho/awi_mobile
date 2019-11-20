import {
  FETCH_COURSE_VIDEO_SUCCESS,
  FETCH_COURSE_VIDEO_FAILURE,
} from './actionTypes';

import axios from 'axios';

const apiUrl = 'https://polyteach-back.igpolytech.fr';

export const fetchVideosForCourse = courseId => {
  function thunk(dispatch) {
    return axios
      .get(`${apiUrl}/${courseId}/videos`)
      .then(response => {
        dispatch(fetchVideoSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchVideoFailure(error));
      });
  }
  thunk.interceptInOffline = true;
  return thunk;
};

export const fetchVideoSuccess = videos => {
  return {
    type: FETCH_COURSE_VIDEO_SUCCESS,
    payload: {
      videos,
    },
  };
};

export const fetchVideoFailure = error => {
  return {
    type: FETCH_COURSE_VIDEO_FAILURE,
    payload: {
      error,
    },
  };
};
