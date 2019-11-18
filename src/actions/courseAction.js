import {FETCH_COURSE_SUCCESS, FETCH_COURSE_FAILURE} from './actionTypes';
import axios from 'axios';
import {mockCourses} from './mockCourses'

const apiUrl = 'https://polyteach-back.igpolytech.fr';

export const fetchCourse = () => {
  function thunk(dispatch) {
    return axios
      .get(`${apiUrl}/courses`)
      .then(response => {
        dispatch(fetchCourseSuccess(mockCourses));
      })
      .catch(error => {
        dispatch(fetchCourseSuccess(mockCourses));
        //dispatch(fetchCourseFailure(error));
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
