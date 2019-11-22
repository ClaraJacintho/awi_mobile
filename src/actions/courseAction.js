import {FETCH_COURSE_SUCCESS, FETCH_COURSE_FAILURE} from './actionTypes';
import {API_URL} from 'react-native-dotenv';
import axios from 'axios';

export const fetchCourse = () => {
  function thunk(dispatch) {
    return axios
      .get(`${API_URL}/courses`)
      .then(response => {
        dispatch(fetchCourseSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchCourseFailure(error));
      });
  }
  thunk.interceptInOffline = true;
  thunk.meta = {
    retry: true,
  };
  return thunk;
};

export const fetchCourseSuccess = courses => {
  return {
    type: FETCH_COURSE_SUCCESS,
    courses,
  };
};

export const fetchCourseFailure = error => {
  return {
    type: FETCH_COURSE_FAILURE,
    payload: {
      error,
    },
  };
};
