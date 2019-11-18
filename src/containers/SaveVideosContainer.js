import DownloadVideoButton from '../components/DownloadVideoButton';
import {connect} from 'react-redux';
import {saveVideo} from '../actions/savedVideosAction';

const mapDispatchToProps = dispatch => {
  return {
    addVideo: videoName => {
      dispatch(saveVideo(videoName));
    },
  };
};

const mapStateToProps = store => {
  return {
    videoURI:
      store.videoURI !== undefined
        ? store.videoURI
        : 'https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4',
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DownloadVideoButton);
