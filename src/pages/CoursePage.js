 
import React from 'react';
import { StyleSheet, Card, Button, Icon,RegularText, Text, Image, View, FlatList } from 'react-native';
import VideoItem from '../components/VideoItem'
import ReadMore from 'react-native-read-more-text';
import styles from '../styles/CoursePageStyle'


export default class CoursePage extends React.Component {
    componentDidMount() {
      this.props.onFetchVideos()
    }
    render() {
      const { course,videos } = this.props
        return (
            <View style={styles.container}>
              <View >
              <Image style={{ width: "100%", height:150, resizeMode: 'stretch', alignContent:"center" }}  source={{uri:"https://i.ytimg.com/vi/WiTxwdGWLoY/maxresdefault.jpg"}}/>
                    <Text style={styles.courseTitle}>
                        {course.courseName}
                    </Text>
              <ReadMore
              numberOfLines={3}
              renderTruncatedFooter={this._renderTruncatedFooter}
              renderRevealedFooter={this._renderRevealedFooter}>
              <Text style={styles.courseDescription}>
              {course.courseDesc}
                </Text>
                </ReadMore> 
              </View>   
                { 
                videos.length > 0 ? (
                <FlatList
                data={videos}
                renderItem={(video)=><VideoItem video={video} />}
                keyExtractor={(item)=>item.videoId}
                ItemSeparatorComponent={()=><View style={{height:0.5,backgroundColor:'#E5E5E5'}}/>}
                 />
                ):(
                <Text style={{fontSize: 48, color:'red'}}>
                    Sorry. No Videos Available.
                </Text>
        )}
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

