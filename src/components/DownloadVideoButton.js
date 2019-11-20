import * as React from 'react';
import {Alert, Button} from 'react-native';
import videoCaching from '../utils/videoCaching';
import {colors} from './../styles/base.js';

export default class DownloadVideoButton extends React.Component {
  constructor(props) {
    super(props);
    this.downloadVideo = this.downloadVideo.bind(this);
    this.state = {
      buttonTitle: 'Download',
      isDisabled: false,
    };
  }

  downloadVideo = () => {
    this.setState({
      buttonTitle: 'Downloading',
      isDisabled: true,
    });
    videoCaching
      .storeVideo(this.props.videoURI, this.props.subtitlesURI)
      .then(result => {
        this.props.addVideo(result.videoName, result.subtitlesName);
        Alert.alert('Success', 'Downloaded!');
        this.setState({
          buttonTitle: 'Downloaded',
          isDisabled: true,
        });
      })
      .catch(err => {
        console.log(err);
        Alert.alert('Error', 'Already downloaded or problem with the storage.');
        this.setState({
          buttonTitle: 'Download',
          isDisabled: false,
        });
      });
  };

  render() {
    return (
      <Button
        title={this.state.buttonTitle}
        disabled={this.state.isDisabled}
        onPress={this.downloadVideo}
        color={colors.purple}
      />
    );
  } 
}
