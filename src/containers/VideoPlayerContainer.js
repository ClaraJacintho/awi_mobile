import VideoPlayer from '../components/VideoPlayer';
import {connect} from 'react-redux';

const mapStateToProps = store => {
  return {
    videoURI:
      store.currentVideo.videoURI !== undefined
        ? store.currentVideo.videoURI
        : 'https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4',
    subtitlesURI:
      store.currentVideo.subtitlesURI !== undefined
        ? store.currentVideo.subtitlesURI
        : null,
  };
};

export default connect(mapStateToProps)(VideoPlayer);
