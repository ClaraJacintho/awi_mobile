import { connect } from 'react-redux';
import { fetchUser } from '../actions/userAction.js';
import FlatListBasics from '../components/testComponant.js';

 const mapDispatchToProps = dispatch => {
      return {
          askTest:() => {
              dispatch(fetchUser());
          }
      }
  };

 const mapStateToProps = state => ({
        names: console.log('state ' + state.key)
 });

 export default connect(
    mapStateToProps,
    mapDispatchToProps
 )(FlatListBasics)
