import {OAUTH_STATE_SAVE} from '../actions/actionTypes';
import {offlineActionTypes} from 'react-native-offline';

export default function savedVideosReducer(state = [], action) {
    switch (action.type) {
        case OAUTH_STATE_SAVE:
           return action.oAuthState
        case offlineActionTypes.FETCH_OFFLINE_MODE:
            return state;
        default:
            return state;
    }
}