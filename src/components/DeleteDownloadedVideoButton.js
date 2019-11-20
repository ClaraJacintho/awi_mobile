import React from 'react';
import {Button, Alert} from 'react-native';
import videoCaching from '../utils/videoCaching';
import {colors} from '../styles/base';

export default class DeleteDownloadedVideoButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonTitle: 'Delete',
    };
    this.deleteVideo = this.deleteVideo.bind(this);
  }

  deleteVideo = () => {
    videoCaching
      .deleteVideo(this.props.video, this.props.subtitles)
      .then(result => {
        if (result) {
          this.props.deleteVideo(
            this.props.video,
            this.props.subtitles,
            this.props.course,
          );
        }
        Alert.alert('Success', 'Deleted!');
      })
      .catch(err => {
        console.log(err);
        Alert.alert('Error', 'Problem in te video deletion');
      });
  };

  render() {
    return (
      <Button
        title={this.state.buttonTitle}
        onPress={this.deleteVideo}
        color={colors.purple}
      />
    );
  }
}
