import {
  FETCH_COURSE_VIDEO_FAILURE,
  FETCH_COURSE_VIDEO_SUCCESS,
} from '../actions/actionTypes';
import {offlineActionTypes} from 'react-native-offline';
//import mockVideos from '../actions/mockVideo'

const mockVideos =  [
  {
      "id": 9,
      "videoName": "Dvwcwcttttttttttttttttxvps",
      "subtitle": "description 3",
      "courseId": 2,
      "videoURL": "https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4"
  },
  {
      "id": 4,
      "videoName": "aaaaaaaa",
      "courseId": 1,
      "subtitle": "description 4",
      "videoURL": "https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4"
  },
  {
      "id": 5,
      "videoName": "zzzzzzzzz",
      "courseId": 3,
      "subtitle": "descrip 5",
      "videoURL": "https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4"
  },
  {
      "id": 6,
      "videoName": "eeeeeeeeee",
      "courseId": 3,
      "subtitle": "description 6",
      "videoURL": "https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4"
  }
]

export default function videosReducer(state = [], action) {
  switch (action.type) {
    case FETCH_COURSE_VIDEO_SUCCESS:
      return action.payload.videos;
    case FETCH_COURSE_VIDEO_FAILURE:
      return [];
    case offlineActionTypes.FETCH_OFFLINE_MODE:
      return state;
    default:
      return state;
  }
}
