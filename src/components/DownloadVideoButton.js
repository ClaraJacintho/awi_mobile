import * as React from 'react';
import {Alert, Button} from 'react-native';
import videoCaching from '../utils/videoCaching';

export default class DownloadVideoButton extends React.Component {
  constructor(props) {
    super(props);
    this.downloadVideo = this.downloadVideo.bind(this);
  }

  downloadVideo = () => {
    videoCaching
      .storeVideo(this.props.videoURI)
      .then(filename => {
        this.props.addVideo(filename);
        Alert.alert('Success', 'Downloaded!');
      })
      .catch(err => {
        console.log(err);
        Alert.alert('Error', 'Already downloaded or problem with the storage.');
      });
  };

  render() {
    return (
      <Button
        title={'Download'}
        disabled={false}
        onPress={this.downloadVideo}
      />
    );
  }
}
