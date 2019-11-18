import {combineReducers} from 'redux';
import {reducer as network} from 'react-native-offline';

import course from './courseReducer';
import user from './userReducer';
import video from './videoReducer';
import savedVideos from './savedVideosReducer';
import currentVideo from './currentVideoReducer';

export default combineReducers({
  network,
  course,
  user,
  video,
  savedVideos,
  currentVideo
});
