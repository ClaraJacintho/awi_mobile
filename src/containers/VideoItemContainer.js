import {connect} from 'react-redux';
import VideoItem from '../components/VideoItem';
import {setCurrentVideo} from '../actions/currentVideoAction';

const mapDispatchToProps = dispatch => {
  return {
    setCurrentVideo: (videoURI, subtitlesURI) => {
      dispatch(setCurrentVideo(videoURI, subtitlesURI));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(VideoItem);
