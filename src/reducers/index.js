import {combineReducers} from 'redux';
import {reducer as network} from 'react-native-offline';

import courses from './courseReducer';
import user from './userReducer';
import videos from './videoReducer';
import savedVideos from './savedVideosReducer';
import currentVideo from './currentVideoReducer';
import connection from './connectionReducer';

export default combineReducers({
  network,
  courses,
  user,
  videos,
  savedVideos,
  currentVideo,
  connection,
});
