import {
  FETCH_COURSE_VIDEO_SUCCESS,
  FETCH_COURSE_VIDEO_FAILURE,
} from './actionTypes';

import axios from 'axios';
import mockVideos from '../assets/mockVideos'

const apiUrl = 'https://polyteach-back.igpolytech.fr';

export const fetchVideosForCourse = courseId => {
  function thunk(dispatch) {
    return axios
      .get(`${apiUrl}/${courseId}/videos`)
      .then(response => {
        dispatch(fetchVideoSuccess(mockVideos));
      })
      .catch(error => {
        dispatch(fetchVideoSuccess(mockVideos));
        //dispatch(fetchVideoFailure(error));
      });
  }
  thunk.interceptInOffline = true;
  return thunk;
};

export const fetchVideoSuccess = videos => {
  return {
    type: FETCH_COURSE_VIDEO_SUCCESS,
    videos,
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
