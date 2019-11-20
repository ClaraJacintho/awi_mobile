import React from 'react';
import {Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {sliderWidth, itemWidth} from '../styles/SliderEntryStyle.js';
import SliderEntry from '../components/SliderEntry';
import styles from '../styles/sliderBaseStyle.js';
import {colors, fonts, padding} from './../styles/base.js';
import Orientation from 'react-native-orientation';


const SLIDER_FIRST_ITEM = 1;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    const {courses} = this.props
    const itemsPerCarousel = courses.length / 3
    const recentylWatched = courses.slice(0, itemsPerCarousel)
    const all = courses
    const finished = courses.slice(itemsPerCarousel)
    this.state = {
      slider1ActiveSlide: SLIDER_FIRST_ITEM,
      recentylWatched: recentylWatched, 
      all: all, 
      finished: finished
    };
    this._renderItem = this._renderItem.bind(this);
    this.onPress = this.onPress.bind(this);
    this.props.onFetchCourses();
  }

  onPress(id, name) {
    const {navigation} = this.props;
    navigation.navigate('CoursePage', {courseTitle: name, courseId: id});
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

  componentDidMount() {
    Orientation.lockToPortrait();
  }
 

  render() {
    return (
      <SafeAreaView>
      <ScrollView style={componentStyles.container}>
        <Text style={componentStyles.listTitle}>Recently watched</Text>
        <Carousel
          ref={c => (this._slider1Ref = c)}
          data={this.state.recentylWatched}
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
          data={this.state.all}
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
          data={this.state.finished}
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
    fontWeight:'bold',
    color: colors.primary,
    paddingBottom: padding.sm,
  },
});
