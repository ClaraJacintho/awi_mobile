import React from 'react';
import {Text, View} from 'react-native';
import ReadMore from 'react-native-read-more-text';
import styles from '../styles/VideoItemStyle';
import SaveVideosContainer from '../containers/SaveVideosContainer';

export default class VideoItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextPressOnline = this.handleTextPressOnline.bind(this);
    this.state = this.props.video.item;
  }

  handleTextPressOnline = () => {
    if (this.props.onItemPress) {
      this.props.setVideo(this.state.videoUrl, this.state.vttUrl);
      const {navigation} = this.props.onItemPress;
      navigation.navigate('VideoPage');
    }
  };


   renderOnline = () => {
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
                <View style={{width: '90%'}}>
                  <ReadMore numberOfLines={2}>
                    <Text
                      numberOfLines={2}
                      style={styles.videoTitle}
                      onPress={this.handleTextPressOnline}>
                      {this.state.title}
                    </Text>
                  </ReadMore>
                </View>
                <View>
                  <SaveVideosContainer
                    videoURI={this.state.videoUrl}
                    subtitlesURI={this.state.vttUrl}
                    courseName={this.props.courseName}
                  />
                </View>
              </View>
            </View>
          </View>
     )
       }

  render() {
      return this.renderOnline()
  }
}
