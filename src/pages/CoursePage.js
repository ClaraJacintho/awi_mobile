import React from 'react';
import {
  RegularText,
  Text,
  Image,
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import VideoItem from '../components/VideoItem';
import ReadMore from 'react-native-read-more-text';
import styles from '../styles/CoursePageStyle';
import Orientation from 'react-native-orientation';

export default class CoursePage extends React.Component {

  constructor(props) {
    super(props);
    this._renderTruncatedFooter = this._renderTruncatedFooter.bind(this);
    this._renderRevealedFooter = this._renderRevealedFooter.bind(this);

    this.setState={
      course: this.props.course,
      videos: this.props.videos,
      isConnected: this.props.isConnected
    }
  }
  componentDidMount() {
    Orientation.lockToPortrait();
    this.props.onfetchVideos()
  }

    static navigationOptions = ({ navigation }) => {
      return {
        title: navigation.getParam('courseTitle', 'Course'),
      };
    };
  

  _renderTruncatedFooter = handlePress => {
    return (
      <RegularText style={styles.linkItem} onPress={handlePress}>
        Read more
      </RegularText>
    );
  };

  _renderRevealedFooter = handlePress => {
    return (
      <RegularText style={styles.linkItem} onPress={handlePress}>
        Show less
      </RegularText>
    );
  };

  render() {
    const videos = this.state.videos
    const course = this.state.course
    const isConnected = this.state.isConnected
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
                renderItem={(video)=><VideoItem video={video} isConnected={isConnected} courseId={course.courseId}/>}
                keyExtractor={(item)=>item.videoId}
                ItemSeparatorComponent={()=><View style={{height:0.5,backgroundColor:'#E5E5E5'}}/>}
                 />) : (
          <Text style={styles.textNoVideo}>Sorry. No Videos Available.</Text>
        )}
      </View>
    );
  }
}

