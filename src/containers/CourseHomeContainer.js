import { connect } from 'react-redux';
import { CoursePage } from '../pages/CoursePage';
import { fetchCourse } from '../actions/courseAction';

const mapStateToProps = (state, ownprops) => {
  return {
    courses: state.courses
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchCourses: courseId => {
      dispatch(fetchCourse());
    }
  };
};

const CoursesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default CoursesList