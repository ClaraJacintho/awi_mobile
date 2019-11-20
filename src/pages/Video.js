import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import VideoPlayerContainer from '../containers/VideoPlayerContainer';
import Orientation from 'react-native-orientation';

export default class VideoPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Orientation.unlockAllOrientations();
  }

  render() {
    return (
      <View style={styles.container}>
        <VideoPlayerContainer style={styles.video} />
      </View>
    );
  }
}

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
