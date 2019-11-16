import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Video from 'react-native-video';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'skyblue',
    },
    video: {
        position:'absolute',
        top: "10%",
        left: 0,
        bottom: "40%",
        right: 0,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
  });

export default class VideoPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>Now playing</Text>
                <Video
                    source={{uri: "https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4" }}
                    style={styles.video}
                    ref={(ref) => {
                        this.player = ref
                    }}
                    controls={true}
                    playWhenInactive={true}
                />
            </View>
        );
    }

}
