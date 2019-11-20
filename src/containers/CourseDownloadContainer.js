import {connect} from 'react-redux';
import DownloadedVideos from '../pages/DownloadedVideos';

const mapStateToProps = (state) => {
  return {
    savedVideos: state.savedVideos
  };
};

const DownloadedVideosContainer = connect(
  mapStateToProps
)(DownloadedVideos);

export default DownloadedVideosContainer;
