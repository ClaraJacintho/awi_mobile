import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import SaveVideosContainer from '../containers/SaveVideosContainer';
import VideoPlayerContainer from '../containers/VideoPlayerContainer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'black',
  },
  video: {
    position: 'absolute',
    top: 0,
    width: '100%',
    left: 0,
    bottom: '10%',
    right: 0,
  },
});
export default class VideoPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <VideoPlayerContainer style={styles.video} />
        <SaveVideosContainer />
      </View>
    );
  }
}
