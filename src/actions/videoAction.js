import {
    FETCH_VIDEO_SUCCESS,
    FETCH_VIDEO_FAILURE
} from './actionTypes';

import axios from 'axios';

apiUrl = 'https://polyteach-back.igpolytech.fr'

export const fetchVideo = () => {
  function thunk(dispatch) {
    console.log('action')
    return axios.get(`${apiUrl}/videos`)
      .then((response) => {
        dispatch(fetchVideoSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchVideoFailure(error));
      });
  };
  thunk.interceptInOffline = true;
  return thunk;
};

export const fetchVideoSuccess =  (videos) => {
    return {
        type: FETCH_VIDEO_SUCCESS,
        videos,
    }
 }

 export const fetchVideoFailure =  (error) => {
     return {
         type: FETCH_VIDEO_FAILURE,
         payload: {
             error
         }
     }
  }