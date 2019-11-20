import DeleteVideoButton from '../components/DeleteDownloadedVideoButton';
import {connect} from 'react-redux';
import {saveVideo, removeVideo} from '../actions/savedVideosAction';

const mapDispatchToProps = dispatch => {
  return {
    deleteVideo: (videoName, subtitlesName, courseName) => {
      dispatch(removeVideo(videoName, subtitlesName, courseName));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(DeleteVideoButton);
