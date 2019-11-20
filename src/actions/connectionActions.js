import {OAUTH_STATE_SAVE} from './actionTypes';

export const saveOAuthState = OAuthState => {
  return {
    type: OAUTH_STATE_SAVE,
    oAuthState: OAuthState,
  };
};
