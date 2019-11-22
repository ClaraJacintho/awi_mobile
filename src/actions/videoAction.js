import {
  FETCH_COURSE_VIDEO_SUCCESS,
  FETCH_COURSE_VIDEO_FAILURE,
} from './actionTypes';
import {API_URL} from 'react-native-dotenv';
import axios from 'axios';

export const fetchVideosForCourse = courseId => {
  function thunk(dispatch) {
    return axios
      .get(`${API_URL}/courses/${courseId}/videos`)
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
