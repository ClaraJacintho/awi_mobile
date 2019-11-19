import React, {Component} from 'react';
import {Text, View} from 'react-native';
import ReadMore from 'react-native-read-more-text';
import styles from '../styles/VideoItemStyle';
import DownloadVideoButton from './DownloadVideoButton';

export default class VideoItem extends Component {
  constructor(props) {
    super(props);
    this.handleTextPress = this.handleTextPress.bind(this);
  }

  handleTextPress = () => {
    if (this.props.onItemPress) {
      const {navigation} = this.props.onItemPress;
      navigation.navigate('VideoPage');
    }
  };

  render() {
    let video = this.props.video.item;
    console.log(video);
    return (
      <View style={styles.container}>
        <View style={styles.descContainer}>
          <View
            style={
              (styles.videoDetails, {marginRight: 100}, {flexDirection: 'row'})
            }>
            <View style={{width: '60%'}}>
              <ReadMore numberOfLines={2} >
                <Text
                  numberOfLines={2}
                  style={styles.videoTitle}
                  onPress={this.handleTextPress}>
                  {video.name}
                </Text>
              </ReadMore>
            </View>
            <View style={({width: '20%'}, {marginRight: '30%'})}>
              <DownloadVideoButton />
            </View>
          </View>
        </View>
      </View>
    );
  }
}