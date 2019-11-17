import {
    FETCH_USER_REQUEST
    FETCH_USER_SUCCESS
    FETCH_USER_FAILURE
} from './actionTypes';
import axios from 'axios';

apiUrl = ""

export const fetchUser = () => {
  function thunk(dispatch({ type: FETCH_USER_REQUEST})) {
    return axios.get(`${apiUrl}/user`)
      .then((response) => {
        dispatch(fetchUserSuccess(response.json));
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error));
      });
  };
  thunk.interceptInOffline = true;
  return thunk;
};

export const fetchUserSuccess =  (data) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: {
            data
        }
    }
 }

 export const fetchUserFailure =  (error) => {
     return {
         type: FETCH_USER_FAILURE,
         payload: {
             error
         }
     }
  }

