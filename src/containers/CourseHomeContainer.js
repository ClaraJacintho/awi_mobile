import {connect} from 'react-redux';
import Home from '../pages/Home';
import {fetchCourse} from '../actions/courseAction';
import {ENTRIES1} from './../assets/entries';
import {deleteUserData, updateUserToken} from '../actions/userAction';

const mapStateToProps = state => {
  console.log(state.courses);
  return {
    courses: state.courses,
    isConnected: state.network.isConnected,
    userData: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchCourses: () => {
      dispatch(fetchCourse());
    },
    updateTokens: (accessToken, refreshToken) => {
      dispatch(updateUserToken(accessToken, refreshToken));
    },
    deleteUserData: () => {
      dispatch(deleteUserData());
    },
  };
};

const CoursesList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default CoursesList;
