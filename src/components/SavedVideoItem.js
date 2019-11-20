import React, {Component} from 'react';
import {Text, View} from 'react-native';
import ReadMore from 'react-native-read-more-text';
import styles from '../styles/VideoItemStyle';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import DeletionButton from '../containers/DeleteVideoContainer';

export default class VideoItem extends Component {
  constructor(props) {
    super(props);
    this.handleTextPress = this.handleTextPress.bind(this);
    this.state = {
      video: this.props.video
    }
  }

  handleTextPress = () => {
    if (this.props.onItemPress) {
      const {navigation} = this.props.onItemPress;
      navigation.navigate('VideoPage');
    }
  };

  render() {
    const video = this.state.video;
    console.log(video);
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
            <DeletionButton video={video.videoName} subtitles={video.subtsubtitlesNameitles} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

