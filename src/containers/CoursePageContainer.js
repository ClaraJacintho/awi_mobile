import { connect } from 'react-redux';
import { CoursePage } from '../pages/CoursePage';
import { fetchVideos } from '../actions/videoAction';

const mapStateToProps = (state, ownprops) => {
    const { navigation } = this.props;
    let courseId = navigation.getParam('courseId');
    console.log(courseId)
  return {
    videos: state.videos.filter(video => video.courseId === courseId),
    course: state.courses.filter(course => course.courseId === courseId)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchVideos: courseId => {
      dispatch(fetchVideos());
    }
  };
};

const CoursesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursePage);

export default CoursesList