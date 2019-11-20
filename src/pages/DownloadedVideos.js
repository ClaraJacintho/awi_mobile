import React from 'react';
import {Text, View, FlatList} from 'react-native';
import styles from '../styles/CoursePageStyle';
import Orientation from 'react-native-orientation';
import DeletionButton from '../containers/DeleteVideoContainer';

export default class CoursePage extends React.Component {
  componentDidMount() {
    Orientation.lockToPortrait();
  }

  render() {
    const data = [
      {
        courseName: 123,
        videoName: 'Sheldon',
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
            renderItem={({item}) => (
              <View style={{borderBottomColor: '#999', padding: 10}}>
                <Text style={{fontSize: 60, fontWeight: 'bold', color: '#333'}}>
                  {item.courseName}
                </Text>
                <Text style={{fontSize: 36, color: '#999'}}>
                  {item.videoName}
                </Text>
                <DeletionButton
                  video={item.videoName}
                  subtitles={item.subtitlesName}
                  course={item.courseName}
                />
              </View>
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
