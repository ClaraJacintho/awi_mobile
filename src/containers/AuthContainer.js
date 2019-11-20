import {connect} from 'react-redux';
import AuthButton from '../components/AuthButton';
import {
  updateUserData,
  updateUserToken,
  deleteUserData,
} from '../actions/userAction';
import {saveOAuthState} from '../actions/connectionActions';

const mapStateToProps = store => {
  return {
    accessToken: store.user.accessToken,
    refreshToken: store.user.refreshToken,
    oauthState: store.connection,
    networkState: store.network.isConnected,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (username, role, accessToken, refreshToken) => {
      dispatch(updateUserData(username, role, accessToken, refreshToken));
    },
    saveState: state => {
      dispatch(saveOAuthState(state));
    },
    updateTokens: (accessToken, refreshToken) => {
      dispatch(updateUserToken(accessToken, refreshToken));
    },
    deleteUserData: () => {
      dispatch(deleteUserData());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthButton);
