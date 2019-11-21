import {connect} from 'react-redux';
import DownloadedVideos from '../pages/DownloadedVideos';

const mapStateToProps = (state) => {
  console.log("saved videos state" + state.savedVideos)
  console.log("token " + state.user.token)
  return {
    savedVideos: state.savedVideos
  };
};

const DownloadedVideosContainer = connect(
  mapStateToProps
)(DownloadedVideos);

export default DownloadedVideosContainer;
