import DownloadVideoButton from '../components/DownloadVideoButton';
import {connect} from 'react-redux';
import {saveVideo} from '../actions/savedVideosAction';

const mapDispatchToProps = dispatch => {
  return {
    addVideo: (videoName, subtitlesName) => {
      dispatch(saveVideo(videoName, subtitlesName));
    },
  };
};

const mapStateToProps = (state, props) => {
  return {
    videoURI:
      state.currentVideo.videoURI !== undefined
        ? state.currentVideo.videoURI
        : props.videoURI,
    subtitlesURI:
      state.currentVideo.subtitlesURI !== undefined
        ? state.currentVideo.subtitlesURI
        : props.subtitlesURI,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DownloadVideoButton);
