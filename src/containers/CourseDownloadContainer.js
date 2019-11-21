import {connect} from 'react-redux';
import DownloadedVideos from '../pages/DownloadedVideos';

const mapStateToProps = state => {
  return {
    savedVideos: state.savedVideos,
  };
};

export default connect(mapStateToProps)(DownloadedVideos);
