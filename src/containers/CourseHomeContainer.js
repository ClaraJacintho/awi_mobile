import {connect} from 'react-redux';
import Home from '../pages/Home';
import {fetchCourse} from '../actions/courseAction';
import {ENTRIES1} from './../assets/entries';

const mapStateToProps = state => {
  console.log(state)
  return {
    courses: ENTRIES1//state.courses,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchCourses: () => {
      dispatch(fetchCourse());
    },
  };
};

const CoursesList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default CoursesList;
