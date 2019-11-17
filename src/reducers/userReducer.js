import {FETCH_USER_REQUEST, FETCH_USER_FAILURE, FETCH_USER_SUCCESS} from '../actions/actionTypes';
import { offlineActionTypes } from 'react-native-offline';

export default function coursesReducer(state = [], action) {
     switch (action.type) {
        case FETCH_USER_SUCCESS:
            return action.data;
        case FETCH_USER_FAILURE:
            return action.error;
        case offlineActionTypes.FETCH_OFFLINE_MODE:
            return state
        default:
            return state;
     }
}