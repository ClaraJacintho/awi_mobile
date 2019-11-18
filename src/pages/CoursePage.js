 
import React from 'react';
import { StyleSheet, Card, Button, Icon,RegularText, Text, Image, View, FlatList } from 'react-native';
import VideoItem from '../components/VideoItem'
import ReadMore from 'react-native-read-more-text';
import styles from '../styles/CoursePageStyle'


export default class CoursePage extends React.Component {
  componentDidMount() {
    const { videos } = this.props
    this.props.onFetch()
  }
    render() {
        return (
            <View style={styles.container}>
              <View >
              <Image style={{ width: "100%", height:150, resizeMode: 'stretch', alignContent:"center" }}  source={{uri:"https://i.ytimg.com/vi/WiTxwdGWLoY/maxresdefault.jpg"}}/>
                    <Text style={styles.courseTitle}>
                        Statstiques et Regression
                    </Text>
              <ReadMore
              numberOfLines={3}
              renderTruncatedFooter={this._renderTruncatedFooter}
              renderRevealedFooter={this._renderRevealedFooter}>
              <Text style={styles.courseDescription}>
                This course is about statistics, it is held in 5th year of engineer school in the departement of Polytech Montpellier
              </Text>
                </ReadMore> 
              </View>   
                { 
                data.videos.length > 0 ? (
                <FlatList
                data={data.videos}
                renderItem={(video)=><VideoItem video={video} />}
                keyExtractor={(item)=>item.id}
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

