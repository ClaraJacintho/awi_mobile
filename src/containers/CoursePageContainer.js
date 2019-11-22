import {connect} from 'react-redux';
import CoursePage from '../pages/CoursePage';
import {fetchVideosForCourse} from '../actions/videoAction';
import {deleteUserData, updateUserToken} from '../actions/userAction';

const mapStateToProps = state => {
  console.log("Staaate "+ JSON.stringify(state))
  return {
    isConnected: state.network.isConnected,
    videos: state.videos,
    userData: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchVideos: courseId => {
      dispatch(fetchVideosForCourse(courseId));
    },
    updateTokens: (accessToken, refreshToken) => {
      dispatch(updateUserToken(accessToken, refreshToken));
    },
    deleteUserData: () => {
      dispatch(deleteUserData());
    },
  };
};

const CoursePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CoursePage);

export default CoursePageContainer;
