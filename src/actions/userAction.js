import {
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE
} from './actionTypes';
import axios from 'axios';

apiUrl = 'https://polyteach-back.igpolytech.fr'

export const fetchUser = () => {
  function thunk(dispatch) {
    console.log('action')
    return axios.get(`${apiUrl}/ping`)
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
        user: data.id,
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

