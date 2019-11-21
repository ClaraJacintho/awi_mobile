import {FETCH_COURSE_SUCCESS, FETCH_COURSE_FAILURE} from './actionTypes';
import axios from 'axios';
//import {mockCourses} from './mockCourses';

const apiUrl = 'https://polyteach-back-staging.igpolytech.fr';

export const fetchCourse = () => {
  console.log("aaaaaaa")
  function thunk(dispatch) {
    console.log("bbbbbbb")
    return axios
      .get(`${apiUrl}/courses`)
      .then(response => {
        console.log("response" + response.data)
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
