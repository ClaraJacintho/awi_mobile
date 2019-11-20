import { connect } from 'react-redux';
import Home from '../pages/Home';
import { fetchCourse } from '../actions/courseAction';

const mapStateToProps = (state, ownprops) => {
  console.log("coursesss "+ JSON.stringify(state.course))
  return {
    courses: state.courses
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchCourses: () => {
      dispatch(fetchCourse());
    }
    }
  };

const CoursesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default CoursesList