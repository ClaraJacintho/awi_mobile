import DownloadVideoButton from '../components/DownloadVideoButton';
import {connect} from 'react-redux';
import {saveVideo} from '../actions/savedVideosAction';

const mapDispatchToProps = dispatch => {
  return {
    addVideo: (videoName, subtitlesName, courseName) => {
      dispatch(saveVideo(videoName, subtitlesName, courseName));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(DownloadVideoButton);
