import {SAVE_DDL_VIDEO} from '../actions/actionTypes';
import {offlineActionTypes} from 'react-native-offline';

export default function coursesReducer(state = [], action) {
  switch (action.type) {
    case SAVE_DDL_VIDEO:
      return [...this.state, action.videoName];
    case offlineActionTypes.FETCH_OFFLINE_MODE:
      return state;
    default:
      return state;
  }
}
