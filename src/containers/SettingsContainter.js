import {connect} from 'react-redux';
import Settings from '../pages/Settings';
import {deleteUserData} from '../actions/userAction';

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => {
      dispatch(deleteUserData());
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Settings);
