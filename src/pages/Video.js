import * as React from 'react';
import {View, StyleSheet, Text, Button, Alert} from 'react-native';
import Video from 'react-native-video';
import videoCaching from "../utils/videoCaching";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    video: {
        position:'absolute',
        top: "30%",
        left: 0,
        bottom: "40%",
        right: 0,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
  });

const videoURI = "https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4";

export default class VideoPage extends React.Component {
    constructor(props) {
        super(props);
        this.downloadVideo = this.downloadVideo.bind(this);
    }

    downloadVideo = () => {
        videoCaching.storeVideo(videoURI)
            .then(() => Alert.alert("Success", "Downloaded!"))
            .catch(() => Alert.alert("Error", "Already downloaded or problem with the storage."));
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>Now playing</Text>
                <Video
                    source={{uri: videoURI }}
                    style={styles.video}
                    ref={(ref) => {
                        this.player = ref
                    }}
                    controls={true}
                    playWhenInactive={true}
                />
                <Button title={"Download..."} onPress={this.downloadVideo}/>
            </View>
        );
    }

}
