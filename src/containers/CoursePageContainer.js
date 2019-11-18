import { connect } from 'react-redux';
import { CoursePage } from '../pages/CoursePage';
import { fetchCourse } from '../actions/courseAction';

const mapStateToProps = (state, ownprops) => {
    let courseId = ownprops.courseId;
  return {
    videos: state.videos.filter(video => video.courseId === courseId)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchCourse: courseId => {
      dispatch(fetchCourse());
    }
  };
};

const CoursesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursePage);

export default CoursesList