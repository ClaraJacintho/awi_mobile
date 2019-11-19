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

export default class CoursePage extends React.Component {
    static navigationOptions = ({ navigation }) => {
      return {
        title: navigation.getParam('courseTitle', 'Course'),
      };
    };
  constructor(props) {
    super(props);
    this._renderTruncatedFooter = this._renderTruncatedFooter.bind(this);
    this._renderRevealedFooter = this._renderRevealedFooter.bind(this);
  }

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
    const data = {
      videos: [
        {
          id: 123,
          name: 'PEWDIEPIE EXTREM MINECRAFT : Le cours de survie en 3h ',
          description:
            'When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
          image: 'https://cdn.mos.cms.futurecdn.net/ShdJFwZ5X35p8qoCYkBvpF.jpg',
        },
        {
          id: 234,
          name: 'Leonard',
          description:
            'As opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web p',
          image: 'https://i.ytimg.com/vi/Nz3Ngt0AMDA/maxresdefault.jpg',
        },
        {
          id: 345,
          name: 'Howard',
          description:
            'The industrys standard dummy text ever since the 1500s, when an unknown',
          image: 'https://i.ytimg.com/vi/HdckOCdnD_0/maxresdefault.jpg',
        },
        {
          id: 456,
          name: 'Raj',
          description:
            ' Various versions have evolved over the years, sometimes by ac',
          image: 'https://i.ytimg.com/vi/WiTxwdGWLoY/maxresdefault.jpg',
        },
        {
          id: 567,
          name: 'Amy',
          description: 'Neurobiologist',
          image: 'https://i.ytimg.com/vi/WiTxwdGWLoY/maxresdefault.jpg',
        },
        {
          id: 678,
          name: 'Bernadette',
          description: 'Microbiologist',
          image: 'https://i.ytimg.com/vi/WiTxwdGWLoY/maxresdefault.jpg',
        },
      ],
    };
    const list = [
      {key: 'Sheldon', prof: 'Theoretical Physicist'},
      {key: 'Leonard', prof: 'Experimental Physicist'},
      {key: 'Howard', prof: 'Mechanical Engineer'},
      {key: 'Raj', prof: 'Astro-Physicist'},
      {key: 'Amy', prof: 'Neurobiologist'},
      {key: 'Bernadette', prof: 'Microbiologist'},
      {key: 'Penny', prof: 'Actress'},
      {key: 'Dr. Gabelhauser', prof: 'Dean'},
      {key: 'Stuart', prof: 'comic store owner'},
      {key: 'Barry', prof: 'Engineer'},
      {key: 'Leslie', prof: 'Physicist'},
      {key: 'Priya', prof: 'Lawyer'},
      {key: 'Lucy', prof: 'unknown'},
    ];
    return (
      <View style={styles.pageContainer}>
        <View>
          <Image
            style={{
              width: '100%',
              height: 175,
              resizeMode: 'stretch',
              alignContent: 'center',
            }}
            source={{
              uri: 'https://i.ytimg.com/vi/WiTxwdGWLoY/maxresdefault.jpg',
            }}
          />
          <Text style={styles.courseTitle}>Statstiques et Regression</Text>
          <ReadMore
            numberOfLines={3}
            renderTruncatedFooter={this._renderTruncatedFooter}
            renderRevealedFooter={this._renderRevealedFooter}>
            <Text style={styles.courseDescription}>
              This course is about statistics, it is held in 5th year of
              engineer school in the departement of Polytech Montpellier
            </Text>
          </ReadMore>
        </View>
        {data.videos.length > 0 ? (
          <FlatList
            data={data.videos}
            renderItem={video => (
              <VideoItem video={video} onItemPress={this.props} />
            )}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={styles.separatorView} />}
          />
        ) : (
          <Text style={styles.textNoVideo}>Sorry. No Videos Available.</Text>
        )}
      </View>
    );
  }
}
