import React from 'react';
import {Text, View, FlatList} from 'react-native';
import styles from '../styles/CoursePageStyle';
import Orientation from 'react-native-orientation';
import SavedVideoItem from '../components/SavedVideoItem'


export default class DownloadPage extends React.Component {
  constructor(props) {
      super(props)
      this.setState = {
        savedVideos : this.props.savedVideos
      }
  }
er
  componentDidMount() {
    Orientation.lockToPortrait();
  }

  render() {
    //const savedVideos = this.state.savedVideo
    const data = [
        {
          courseName: "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
          videoName: 'Shefgdsgfsdgfdsgdfshdshjgsgsfhdshdsgfggsldfdsqqqqqqqqdddddddddddddddddddddddddon',
          subtitlesName: 'Theoretical Physicist',
        },
        {
          courseName: 234,
          videoName: 'Leonard',
          subtitlesName: 'Experimental Physicist',
        },
        {
          courseName: 345,
          videoName: 'Howard',
          subtitlesName: 'Mechanical Engineer',
        },
        {
          courseName: 456,
          videoName: 'Raj',
          subtitlesName: 'Astro-Physicist',
        },
        {
          courseName: 567,
          videoName: 'Amy',
          subtitlesName: 'Neurobiologist',
        },
        {
          courseName: 678,
          videoName: 'Bernadette',
          subtitlesName: 'Microbiologist',
        },
      ];


    return (
      <View style={styles.container}>
        {data.length > 0 ? (
          <FlatList
            data={data}
            renderItem={({item}) => <SavedVideoItem video={item}/>}
            keyExtractor={item => item.videoName}
            ItemSeparatorComponent={() => (
              <View style={{height: 0.5, backgroundColor: '#E5E5E5'}} />

            )}
          />
        ) : (
          <Text style={{fontSize: 40, color: 'red'}}>
            Sorry. No Videos Available.
          </Text>
        )}
      </View>
    );
  }
}
