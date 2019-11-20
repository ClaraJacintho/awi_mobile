import {connect} from 'react-redux';
import WelcomeText from '../components/WelcomeText';

const mapStateToProps = store => {
  return {
    info: console.log(store),
    username: store.user.username,
  };
};

export default connect(mapStateToProps)(WelcomeText);
