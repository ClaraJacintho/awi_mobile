import {connect} from 'react-redux';
import CoursePage from '../pages/CoursePage';

const mapStateToProps = (state) => {
  return {
    savedVideos: state.savedVideos
  };
};

const CoursePageContainer = connect(
  mapStateToProps
)(CoursePage);

export default CoursePageContainer;
