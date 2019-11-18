import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    Icon,
    TouchableOpacity
} from 'react-native';
import ReadMore from 'react-native-read-more-text';
import styles from '../styles/VideoItemStyle'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import DownloadVideoButton from './DownloadVideoButton'



export default class VideoItem extends Component {
    render() {
        let video = this.props.video.item;
        console.log(video)
        return (
            <View style={styles.container}>
                <View style={styles.descContainer}>
                    <View style={styles.videoDetails, {marginRight: 100}, {flexDirection:"row"}}>
                    <View style={{width:"60%"}}> 
                    <ReadMore
                        numberOfLines={2}
                        renderTruncatedFooter={this._renderTruncatedFooter}
                        renderRevealedFooter={this._renderRevealedFooter}>
                            <Text numberOfLines={2} style={styles.videoTitle}>{video.name}</Text>
                          </ReadMore>
                          </View>
                    <View style={{width:"20%"}, {marginRight:"30%"}}>
                        <DownloadVideoButton/>
                    </View>
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


