import {
    FETCH_COURSE_REQUEST,
    FETCH_COURSE_SUCCESS,
    FETCH_COURSE_FAILURE
} from './actionTypes';
import axios from 'axios';

apiUrl = ""

export const fetchCourse = () => {
  function thunk(dispatch({ type: FETCH_COURSE_REQUEST})) {
    return axios.get(`${apiUrl}/course`)
      .then((response) => {
        dispatch(fetchCourseSuccess(response.json));
      })
      .catch((error) => {
        dispatch(fetchCourseFailure(error));
      });
  };
  thunk.interceptInOffline = true;
  fetchData.meta = {
      retry: true
    };
  return thunk;
};

export const fetchCourseSuccess =  (data) => {
    return {
        type: FETCH_COURSE_SUCCESS,
        payload: {
            data
        }
    }
 }

 export const fetchCourseFailure =  (error) => {
     return {
         type: FETCH_COURSE_FAILURE,
         payload: {
             error
         }
     }
  }
