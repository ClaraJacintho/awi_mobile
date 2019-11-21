import {connect} from 'react-redux';
import SavedVideoItem from '../components/SavedVideoItem';
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
)(SavedVideoItem);
