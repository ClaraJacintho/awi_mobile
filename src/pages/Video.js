import * as React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import Video from 'react-native-video';
import SaveVideosContainer from '../containers/SaveVideosContainer';

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
    top: '0%',
    width: '100%',
    left: 0,
    bottom: '10%',
    right: 0,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

const videoURI =
  'https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4';

export default class VideoPage extends React.Component {
  constructor(props) {
    super(props);
    this.printState = this.printState.bind(this);
  }

  printState = () => {
    console.log(this.state);
  };

  render() {
    return (
      <View style={styles.container}>
        <Video
          source={{uri: videoURI}}
          style={styles.video}
          ref={ref => {
            this.player = ref;
          }}
          controls={true}
          playWhenInactive={true}
          resizeMode={'contain'}
          fullScreen={'true'}
        />
        <SaveVideosContainer videoURI={videoURI} />
        <Button title={'Test'} onPress={this.printState} />
      </View>
    );
  }
}
