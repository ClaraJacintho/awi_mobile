import {
  FETCH_COURSE_VIDEO_SUCCESS,
  FETCH_COURSE_VIDEO_FAILURE,
} from './actionTypes';

import axios from 'axios';
import vid from './mockVideo';

const apiUrl = 'https://polyteach-back.igpolytech.fr';

export const fetchVideosForCourse = (courseId = 1) => {
  //console.log('aaaaaaaaaaa');
  function thunk(dispatch) {
    //console.log('bbbbbb' + JSON.stringify(mockVideos));
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

const mockVideos = [
  {
    id: 3,
    videoName: 'My course',
    subtitle: 'description 3',
    courseId: 2,
    videoURL:
      'https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4',
  },
  {
    id: 4,
    videoName: 'course',
    courseId: 1,
    subtitle: 'description 4',
    videoURL:
      'https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4',
  },
  {
    id: 5,
    videoName: 'zzzzzzzzz',
    courseId: 3,
    subtitle: 'descrip 5',
    videoURL:
      'https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4',
  },
  {
    id: 6,
    videoName: 'eeeeeeeeee',
    courseId: 3,
    subtitle: 'description 6',
    videoURL:
      'https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4',
  },
];
