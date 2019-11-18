import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import ReadMore from 'react-native-read-more-text';
import {styles} from '../styles/VideoItemStyle'


export default class VideoItem extends Component {
    render() {
        let video = this.props.video.item;
        console.log(video)
        return (
            <View style={styles.container}>
                <Image source={{ uri: video.image }} style={{ height: 200 }} />
                <View style={styles.descContainer}>
                    <View style={styles.videoDetails}>
                    <ReadMore
                            numberOfLines={2}
                            renderTruncatedFooter={this._renderTruncatedFooter}
                            renderRevealedFooter={this._renderRevealedFooter}>
                        <Text numberOfLines={2} style={styles.videoTitle}>{video.name}</Text>
                        </ReadMore>
                        <ReadMore
                            numberOfLines={2}
                            renderTruncatedFooter={this._renderTruncatedFooter}
                            renderRevealedFooter={this._renderRevealedFooter}>
                        <Text style={styles.descContainer}>{video.description}</Text>
                        </ReadMore>
                    </View>
                </View>
            </View>
        )
    }
}

_renderTruncatedFooter = (handlePress) => {
    return (
      <RegularText style={{color: Colors.Blue, marginTop: 5}} onPress={handlePress}>
        Read more
      </RegularText>
    );
  }
 
  _renderRevealedFooter = (handlePress) => {
    return (
      <RegularText style={{color: Colors.tintColor, marginTop: 5}} onPress={handlePress}>
        Show less
      </RegularText>
    );
  }


