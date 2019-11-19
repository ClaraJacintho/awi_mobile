import {connect} from 'react-redux';
import AuthButton from '../components/AuthButton';
import {updateUserData} from '../actions/userAction';

const mapStateToProps = store => {
  return {
    accessToken: store.user.accessToken,
    refreshToken: store.user.refreshToken,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (username, role, accessToken, refreshToken) => {
      dispatch(updateUserData(username, role, accessToken, refreshToken));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthButton);
