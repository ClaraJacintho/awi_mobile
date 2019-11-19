import {connect} from 'react-redux';
import AuthButton from '../components/AuthButton';
import {updateUserData} from '../actions/userAction';
import {saveOAuthState} from '../actions/connexionActions';

const mapStateToProps = store => {
  return {
    accessToken: store.user.accessToken,
    refreshToken: store.user.refreshToken,
    oauthState: store.connection,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (username, role, accessToken, refreshToken) => {
      dispatch(updateUserData(username, role, accessToken, refreshToken));
    },
    saveState: state => {
      dispatch(saveOAuthState(state));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthButton);
