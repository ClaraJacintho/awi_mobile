import {connect} from 'react-redux';
import AuthButton from '../components/AuthButton';
import {setUserToken} from '../actions/userAction';

const mapStateToProps = store => {
  return {
    token: store.user.token,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setToken: (token, refreshToken) => {
      dispatch(setUserToken(token, refreshToken));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthButton);
