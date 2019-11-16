import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import Video from 'react-native-video';

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    },
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
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
                <Video 
                    source={{uri: "https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4" }}
                    style={styles.backgroundVideo}
                    ref={(ref) => {
                        this.player = ref
                    }}
                    controls={true}
                />
            </View>
        );
    }
    
}