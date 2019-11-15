import { combineReducers } from 'redux';
import { reducer as network } from 'react-native-offline';

import course from './courseReducer';
import user from './userReducer';

export default combineReducers({
    courses: course,
    network,
    user: user,
});