 
import React from 'react';
import { StyleSheet, Card, Button, Icon,RegularText, Text, Image, View, FlatList } from 'react-native';
import VideoItem from '../components/VideoItem'
import ReadMore from 'react-native-read-more-text';
import styles from '../styles/CoursePageStyle'


export default class CoursePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      course : this.props.course,
      videos : this.props.videos,
      isConnected : this.props.isConnected
    } = this.props
  }
  
    componentDidMount() {
      console.log("compo mount")
      this.props.onFetchVideos(this.state.course.courseId)
    }
    
     render() {
      console.log("chargé" + this.props.course)
      const course = this.state.course
      const videos = this.state.videos
      const isConnected = this.state.isConnected
            //console.log("videos nat"+JSON.stringify(course[0].courseImageLink))
            return (
              <View style={styles.container}>
                <View>
                  <Image
                    style={{
                      width: '100%',
                      height: 150,
                      resizeMode: 'stretch',
                      alignContent: 'center',
                    }}
                    source={{
                      uri: '',//course[0].courseImageLink,
                    }}
                  />
                  <Text style={styles.courseTitle}>{course[0].courseName}</Text>
                  <ReadMore
                    numberOfLines={3}
                    renderTruncatedFooter={this._renderTruncatedFooter}
                    renderRevealedFooter={this._renderRevealedFooter}>
                    <Text style={styles.courseDescription}>
                      {course[0].courseDesc}
                    </Text>
                  </ReadMore>
                </View>
                
                {videos.length > 0 ? (
                  videos.map( video => {
                    return (<VideoItem video={video} isConnected={isConnected} courseId={course[0].courseId} />)
                    }
                  )
                ) : (
                  <Text style={{fontSize: 48, color: 'red', alignContent='center'}}>
                    Sorry. No Videos Available.
                  </Text>
                )}
              </View>
            );
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

