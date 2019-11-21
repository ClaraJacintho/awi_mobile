import React from 'react';
import {Text, StyleSheet, ScrollView, SafeAreaView, Alert} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {sliderWidth, itemWidth} from '../styles/SliderEntryStyle.js';
import SliderEntry from '../components/SliderEntry';
import styles from '../styles/sliderBaseStyle.js';
import {colors, fonts, padding} from './../styles/base.js';
import Orientation from 'react-native-orientation';
import {checkTokenValidity} from '../utils/auth';

const SLIDER_FIRST_ITEM = 1;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this);
    this.onPress = this.onPress.bind(this);
    this.retrieveCourses = this.retrieveCourses.bind(this);
    this.state = {
      slider1ActiveSlide: SLIDER_FIRST_ITEM,
    };
  }

  componentDidMount() {
    Orientation.lockToPortrait();
    this.retrieveCourses();
  }

  retrieveCourses = () => {
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
        this.props.onFetchCourses();
      })
      .catch(err => {
        if (err instanceof TypeError) {
          this.props.deleteUserData();
          const {navigate} = this.props.navigation;
          navigate('Auth');
        }
      });
  };

  onPress(id) {
    const {navigation} = this.props;
    const course = this.props.courses.filter(c => c.id === id)[0];
    if (!this.props.isConnected) {
      Alert.alert(
        'Alert',
        'You are offline, please connect to internet in order to watch videos or go into the saved one.',
      );
    }
    navigation.navigate('CoursePage', {course: course, title: course.name});
  }

  _renderItem({item, index}) {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        click={this.onPress}
      />
    );
  }

  render() {
    const courses = this.props.courses;
    const itemsPerCarousel = courses.length / 3;
    const bookmarked = courses.filter(course => course.bookmarked);
    const finished = courses.slice(itemsPerCarousel);
    return (
      <SafeAreaView style={componentStyles.container}>
        <ScrollView>
          <Text style={componentStyles.listTitle}>Bookmarked courses</Text>
          <Carousel
            ref={c => (this._slider1Ref = c)}
            data={bookmarked}
            renderItem={this._renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            hasParallaxImages={false}
            firstItem={SLIDER_FIRST_ITEM}
            inactiveSlideScale={0.94}
            inactiveSlideOpacity={0.7}
            containerCustomStyle={styles.slider}
            contentContainerCustomStyle={styles.sliderContentContainer}
            loop={true}
            loopClonesPerSide={2}
            onSnapToItem={index => this.setState({slider1ActiveSlide: index})}
          />
          <Text style={componentStyles.listTitle}>All courses</Text>
          <Carousel
            ref={c => (this._slider2Ref = c)}
            data={courses}
            renderItem={this._renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            hasParallaxImages={false}
            firstItem={SLIDER_FIRST_ITEM}
            inactiveSlideScale={0.94}
            inactiveSlideOpacity={0.7}
            containerCustomStyle={styles.slider}
            contentContainerCustomStyle={styles.sliderContentContainer}
            loop={true}
            loopClonesPerSide={2}
            onSnapToItem={index => this.setState({slider1ActiveSlide: index})}
          />
          <Text style={componentStyles.listTitle}>Finished</Text>
          <Carousel
            ref={c => (this._slider3Ref = c)}
            data={finished}
            renderItem={this._renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            hasParallaxImages={false}
            firstItem={SLIDER_FIRST_ITEM}
            inactiveSlideScale={0.94}
            inactiveSlideOpacity={0.7}
            containerCustomStyle={styles.slider}
            contentContainerCustomStyle={styles.sliderContentContainer}
            loop={true}
            loopClonesPerSide={2}
            onSnapToItem={index => this.setState({slider1ActiveSlide: index})}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const componentStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  listTitle: {
    marginTop: padding.sm,
    fontSize: fonts.lg,
    fontFamily: fonts.primary,
    fontWeight: 'bold',
    color: colors.primary,
    paddingBottom: padding.sm,
  },
});
