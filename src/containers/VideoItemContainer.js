import {connect} from 'react-redux';
import VideoItem from '../components/VideoItem';
import {setCurrentVideo} from '../actions/currentVideoAction';

const mapDispatchToProps = dispatch => {
  return {
    setVideo: (videoURI, subtitlesURI) => {
      dispatch(setCurrentVideo(videoURI, subtitlesURI));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(VideoItem);
