import { connect } from 'react-redux';
import CoursePage from '../pages/CoursePage';
import { fetchVideosForCourse } from '../actions/videoAction';

const mapStateToProps = (state, ownprops) => {
    const courseId = ownprops.navigation.getParam('courseId')
    console.log("staaaaaaaaaaaaaate" + JSON.stringify(state))
    console.log("videooooooooooooooooo" + JSON.stringify(state.videos))


  return {
    videos: state.videos,//.filter(video => video.courseId === courseId),
    course: state.courses//.filter(course => course.courseId === courseId)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchVideos: () => {
      console.log("hbhbhh")
      dispatch(fetchVideosForCourse())
    }
  };
};

const CoursePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursePage);

export default CoursePageContainer