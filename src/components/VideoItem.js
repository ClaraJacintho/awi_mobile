import React, {Component} from 'react';
import {Text, View} from 'react-native';
import ReadMore from 'react-native-read-more-text';
import styles from '../styles/VideoItemStyle';
import SaveVideosContainer from '../containers/SaveVideosContainer';

export default class VideoItem extends Component {
  constructor(props) {
    super(props);
    this.handleTextPress = this.handleTextPress.bind(this);
    this.state = this.props.video.item;
  }

  handleTextPress = () => {
    if (this.props.onItemPress) {
      this.props.setVideo(this.state.videoUrl, this.state.vttUrl);
      const {navigation} = this.props.onItemPress;
      navigation.navigate('VideoPage');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.descContainer}>
          <View
            style={Object.assign(
              {},
              styles.videoDetails,
              {marginRight: 100},
              {flexDirection: 'row'},
            )}>
            <View style={{width: '60%'}}>
              <ReadMore numberOfLines={2}>
                <Text
                  numberOfLines={2}
                  style={styles.videoTitle}
                  onPress={this.handleTextPress}>
                  {this.state.title}
                </Text>
              </ReadMore>
            </View>
            <View>
              <SaveVideosContainer
                videoURI={this.state.videoUrl}
                subtitle={this.state.vttUrl}
                courseId={this.props.courseName}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
