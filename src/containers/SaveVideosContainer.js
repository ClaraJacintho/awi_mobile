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

const mapStateToProps = store => {
  return {
    currentVideo:
      store.currentVideo.videoURI !== undefined
        ? store.currentVideo.videoURI
        : 'https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4',
    currentSubs:
      store.currentVideo.subtitlesURI !== undefined
        ? store.currentVideo.subtitlesURI
        : null,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DownloadVideoButton);
