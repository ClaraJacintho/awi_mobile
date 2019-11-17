import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE
} from './actionTypes';
import axios from 'axios';

apiUrl = 'https://twiddle-back.igpolytech.fr/api'

export const fetchUser = () => {
  function thunk(dispatch) {
    console.log('action')
    return axios.get(`${apiUrl}/api-status`)
      .then((response) => {
        dispatch(fetchUserSuccess(response.data));
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
        key: data.status,
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

