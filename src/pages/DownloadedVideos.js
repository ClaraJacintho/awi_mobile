import React from 'react';
import {Text, View, FlatList, SafeAreaView} from 'react-native';
import styles from '../styles/CoursePageStyle';
import Orientation from 'react-native-orientation';
import SavedVideoItem from '../containers/SavedVideoItemContainer';

export default class DownloadPage extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {
      savedVideos: this.props.savedVideos,
    };
  }

  componentDidMount() {
    Orientation.lockToPortrait();
  }

  render() {
    const savedVideos = this.props.savedVideos;
    return (
      <SafeAreaView style={styles.container}>
        {savedVideos.length > 0 ? (
          <FlatList
            data={savedVideos}
            renderItem={video => (
              <SavedVideoItem video={video} onItemPress={this.props} />
            )}
            keyExtractor={video => video.videoName}
            ItemSeparatorComponent={() => (
              <View style={{height: 0.5, backgroundColor: '#E5E5E5'}} />
            )}
          />
        ) : (
          <Text
            style={{
              fontSize: 20,
              textAlignVertical: 'center',
              textAlign: 'center',
              color: 'red',
            }}>
            Sorry. No Videos Available.
          </Text>
        )}
      </SafeAreaView>
    );
  }
}
