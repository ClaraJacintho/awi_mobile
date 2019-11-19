 
import React from 'react';
import { StyleSheet, Card, Button, Icon,RegularText, Text, Image, View, FlatList } from 'react-native';
import VideoItem from '../components/VideoItem'
import ReadMore from 'react-native-read-more-text';
import styles from '../styles/CoursePageStyle'


export default class CoursePage extends React.Component {
  constructor(props){
    super(props);
  }
  
    componentDidMount() {
      console.log("compo mount")
      this.props.onFetchVideos()
    }
    
     render() {
      console.log("chargé" + this.props.course)
            const courses = this.props.course
            console.log("rrrr"+JSON.stringify(courses))
            const videos = this.props.videos
            console.log("videos nat"+JSON.stringify(videos))
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
                      uri: 'https://i.ytimg.com/vi/WiTxwdGWLoY/maxresdefault.jpg',
                    }}
                  />
                  <Text style={styles.courseTitle}>Le nommm du couuurs</Text>
                  <ReadMore
                    numberOfLines={3}
                    renderTruncatedFooter={this._renderTruncatedFooter}
                    renderRevealedFooter={this._renderRevealedFooter}>
                    <Text style={styles.courseDescription}>
                      descriptioooonn
                    </Text>
                  </ReadMore>
                </View>
                
                {videos.length > 0 ? (
                  videos.map( video => {
                    console.log("yovcwvcxwvyoyooy"+JSON.stringify(video) )
                    return (<VideoItem video={video} />)
                    }
                  )
                ) : (
                  <Text style={{fontSize: 48, color: 'red'}}>
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

