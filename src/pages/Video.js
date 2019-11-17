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

const videoURI = this.store.videoURI || "https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4";

export default class VideoPage extends React.Component {
    constructor(props) {
        super(props);
        this.downloadVideo = this.downloadVideo.bind(this);
    }

    downloadVideo = () => {
        Alert.alert("Download", "Downloading video");
        try {
            const res = videoCaching.storeVideo(videoURI);
            Alert.alert("Success", "Downloaded!" + res);
        } catch (e) {
            Alert.alert("Error", e);
        }
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
