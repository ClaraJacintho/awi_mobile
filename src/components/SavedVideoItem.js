import React from 'react';
import {Text, View} from 'react-native';
import ReadMore from 'react-native-read-more-text';
import styles from '../styles/VideoItemStyle';
import DeletionButton from '../containers/DeleteVideoContainer';
import VideoCaching from '../utils/videoCaching';

export default class SavedVideoItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextPress = this.handleTextPress.bind(this);
  }

  handleTextPress = () => {
    if (this.props.onItemPress) {
      VideoCaching.retrieveVideoPath({
        videoName: this.props.video.item.videoName,
        subtitlesName: this.props.video.item.subtitlesName,
      })
        .then(result => {
          this.props.setVideo(result.videoURI, result.subtitlesURI);
          const {navigation} = this.props.onItemPress;
          navigation.navigate('VideoPage');
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    const video = this.props.video.item;
    return (
      <View style={styles.container}>
        <View style={styles.descContainer}>
          <View style={{width: '30%'}}>
            <ReadMore numberOfLines={2}>
              <Text
                numberOfLines={2}
                style={styles.videoTitle}
                onPress={this.handleTextPress}>
                {video.courseName}
              </Text>
            </ReadMore>
          </View>
          <View
            style={
              (styles.videoDetails, {marginRight: 100}, {flexDirection: 'row'})
            }>
            <View style={{width: '50%'}}>
              <ReadMore numberOfLines={2}>
                <Text
                  numberOfLines={2}
                  style={styles.videoTitle}
                  onPress={this.handleTextPress}>
                  {video.videoName}
                </Text>
              </ReadMore>
            </View>
            <View style={{width: '20%', marginRight: '30%'}}>
              <DeletionButton
                video={video.videoName}
                subtitles={video.subtitlesName}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
