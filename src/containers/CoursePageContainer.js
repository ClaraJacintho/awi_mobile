import {connect} from 'react-redux';
import CoursePage from '../pages/CoursePage';
import {fetchVideosForCourse} from '../actions/videoAction';

const mapStateToProps = (state, ownprops) => {
  const courseId = ownprops.navigation.getParam('courseId');
  return {
    videos: state.videos.filter(video => video.courseId === courseId),
    course: state.courses.filter(course => course.courseId === courseId),
    isConnected: state.isConnected,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchVideos: courseId => {
      dispatch(fetchVideosForCourse(courseId));
    },
  };
};

const CoursePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CoursePage);

export default CoursePageContainer;