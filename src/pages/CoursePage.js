import React from 'react';
import {Text, Image, View, FlatList} from 'react-native';
import VideoItem from '../components/VideoItem';
import ReadMore from 'react-native-read-more-text';
import styles from '../styles/CoursePageStyle';
import Orientation from 'react-native-orientation';

export default class CoursePage extends React.Component {
  constructor(props) {
    super(props);
    this._renderTruncatedFooter = this._renderTruncatedFooter.bind(this);
    this._renderRevealedFooter = this._renderRevealedFooter.bind(this);
  }

  componentDidMount() {
    Orientation.lockToPortrait();
    this.props.onFetchVideos(this.props.courseId);
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('courseTitle', 'Course'),
    };
  };

  _renderTruncatedFooter = handlePress => {
    return (
      <Text style={styles.linkItem} onPress={handlePress}>
        Read more
      </Text>
    );
  };

  _renderRevealedFooter = handlePress => {
    return (
      <Text style={styles.linkItem} onPress={handlePress}>
        Show less
      </Text>
    );
  };

  render() {
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
          <Text style={styles.courseTitle}>{this.props.course.courseName}</Text>
          <ReadMore
            numberOfLines={3}
            renderTruncatedFooter={this._renderTruncatedFooter}
            renderRevealedFooter={this._renderRevealedFooter}>
            <Text style={styles.courseDescription}>
              {this.props.course.courseDesc}
            </Text>
          </ReadMore>
        </View>
        {this.props.videos.length > 0 ? (
          <FlatList
            data={this.props.videos}
            renderItem={video => <VideoItem video={video} />}
            keyExtractor={item => item.videoId}
            ItemSeparatorComponent={() => (
              <View style={{height: 0.5, backgroundColor: '#E5E5E5'}} />
            )}
          />
        ) : (
          <Text style={styles.textNoVideo}> Sorry. No Videos Available. </Text>
        )}
      </View>
    );
  }
}
