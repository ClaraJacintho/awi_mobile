import React from 'react';
import {Text, Image, View, FlatList} from 'react-native';
import VideoItem from '../containers/VideoItemContainer';
import ReadMore from 'react-native-read-more-text';
import styles from '../styles/CoursePageStyle';
import Orientation from 'react-native-orientation';
import {checkTokenValidity} from '../utils/auth';
import {padding} from '../styles/base';

export default class CoursePage extends React.Component {
  constructor(props) {
    super(props);
    this._renderTruncatedFooter = this._renderTruncatedFooter.bind(this);
    this._renderRevealedFooter = this._renderRevealedFooter.bind(this);
    this.retrieveVideos = this.retrieveVideos.bind(this);
    this.state = this.props.navigation.getParam('course');
  }

  componentDidMount() {
    Orientation.lockToPortrait();
    this.retrieveVideos();
  }

  retrieveVideos = () => {
    checkTokenValidity(
      this.props.userData.accessToken,
      this.props.userData.refreshToken,
      this.props.isConnected,
    )
      .then(response => {
        if (!response.validity) {
          this.props.updateTokens(
            this.props.userData.accessToken,
            this.props.userData.refreshToken,
          );
        }
        this.props.onFetchVideos(this.state.id);
      })
      .catch(err => {
        if (err instanceof TypeError) {
          this.props.deleteUserData();
          const {navigate} = this.props.navigation;
          navigate('Auth');
        }
      });
  };

  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('title', 'Course'),
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
              marginBottom: padding.md,
            }}
            source={{
              uri: this.state.picture,
            }}
          />
          <ReadMore
            numberOfLines={3}
            renderTruncatedFooter={this._renderTruncatedFooter}
            renderRevealedFooter={this._renderRevealedFooter}>
            <Text style={styles.courseDescription}>
              {this.state.description}
            </Text>
          </ReadMore>
        </View>
        {this.props.videos.length > 0 ? (
          <FlatList
            data={this.props.videos}
            renderItem={video => (
              <VideoItem
                video={video}
                courseName={this.state.name}
                isConnected={this.props.isConnected}
                onItemPress={this.props}
              />
            )}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={() => (
              <View style={{height: 0.5, backgroundColor: '#E5E5E5'}} />
            )}
          />
        ) : (
          <Text style={styles.textNoVideo}> Sorry! No Videos Available. </Text>
        )}
      </View>
    );
  }
}
