 
import React from 'react';
import { StyleSheet, Card, Button, Icon,RegularText, Text, Image, View, FlatList } from 'react-native';
import VideoItem from '../components/VideoItem'
import ReadMore from 'react-native-read-more-text';
import styles from '../styles/CoursePageStyle'


const mockVideos =  [
  {
      "id": 3,
      "title": "DevOps",
      "subtitle": "description 3",
      "courseId": 2,
      "videoURL": "https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4"
  },
  {
      "id": 4,
      "title": "aaaaaaaa",
      "courseId": 1,
      "subtitle": "description 4",
      "videoURL": "https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4"
  },
  {
      "id": 5,
      "title": "zzzzzzzzz",
      "courseId": 3,
      "subtitle": "descrip 5",
      "videoURL": "https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4"
  },
  {
      "id": 6,
      "title": "eeeeeeeeee",
      "courseId": 3,
      "subtitle": "description 6",
      "videoURL": "https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4"
  }
]

const course = [
  {
      "courseId": 3,
      "courseName": "DevOps",
      "courseDesc": "description 3",
      "courseImageLink": "https://static1.squarespace.com/static/559dc415e4b0fcb781ceca92/55b6c5f7e4b08c3f4b9f3f83/5c51551e4ae23755fa90f088/1548890390219/jason-leung-479251-unsplash.jpg?format=2500w"
  }]

export default class CoursePage extends React.Component {
  
    componentDidMount() {
      this.props.onFetchVideos()
    }
    
    async render() {
      const mockVideos =  [
        {
            "id": 3,
            "title": "DevOps",
            "subtitle": "description 3",
            "courseId": 2,
            "videoURL": "https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4"
        },
        {
            "id": 4,
            "title": "aaaaaaaa",
            "courseId": 1,
            "subtitle": "description 4",
            "videoURL": "https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4"
        },
        {
            "id": 5,
            "title": "zzzzzzzzz",
            "courseId": 3,
            "subtitle": "descrip 5",
            "videoURL": "https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4"
        },
        {
            "id": 6,
            "title": "eeeeeeeeee",
            "courseId": 3,
            "subtitle": "description 6",
            "videoURL": "https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4"
        }
      ]
      
      const courses = [
        {
            "courseId": 3,
            "courseName": "DevOps",
            "courseDesc": "description 3",
            "courseImageLink": "https://static1.squarespace.com/static/559dc415e4b0fcb781ceca92/55b6c5f7e4b08c3f4b9f3f83/5c51551e4ae23755fa90f088/1548890390219/jason-leung-479251-unsplash.jpg?format=2500w"
        }]
      console.log("chargé" + this.props.course)
      //const { course, videos } = this.props
            const course = courses[0]
            const videos = mockVideos
            console.log(course)
            const courseload = course.length ? (
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
            
            ): (
              <Text style={{fontSize: 48, color:'red'}}>
                    Course Loading
                </Text>
            )
            console.log("course load "+courseload + courseload.props)
            console.log("chargé" + this.props.course.length)
            return (
              <div className="courseList">
              <ul id="courselist"> 
              {courseload}
                </ul>    
              </div>
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

