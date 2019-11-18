import VideoPlayer from '../components/VideoPlayer';
import {connect} from 'react-redux';

const mapStateToProps = store => {
  return {
    videoURI:
      store.videoURI !== undefined
        ? store.videoURI
        : 'https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4',
    subtitlesURI: store.subtitlesURI !== undefined ? store.subtitlesURI : null,
  };
};

export default connect(mapStateToProps)(VideoPlayer);
