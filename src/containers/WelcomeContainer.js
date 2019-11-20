import {connect} from 'react-redux';
import WelcomeText from '../components/WelcomeText';

const mapStateToProps = store => {
  return {
    username: store.user.username,
  };
};

export default connect(mapStateToProps)(WelcomeText);
