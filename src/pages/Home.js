import React from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {sliderWidth, itemWidth} from '../styles/SliderEntryStyle.js';
import SliderEntry from '../components/SliderEntry';
import styles from '../styles/sliderBaseStyle.js';
import {ENTRIES1} from './../assets/entries';
import {colors, fonts, padding} from './../styles/base.js';
import Orientation from 'react-native-orientation';

const SLIDER_1_FIRST_ITEM = 1;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
    };
    this._renderItem = this._renderItem.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    const {navigation} = this.props;
    navigation.navigate('CoursePage', {courseTitle: "Stats"});
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
    const {navigation} = this.props;
    //const {navigate} = this.props.navigation;
    return (
      <ScrollView style={componentStyles.container}>
        <Text style={componentStyles.listTitle}>Recently watched</Text>
        <Carousel
          ref={c => (this._slider1Ref = c)}
          data={ENTRIES1}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={false}
          firstItem={SLIDER_1_FIRST_ITEM}
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
          data={ENTRIES1}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={false}
          firstItem={SLIDER_1_FIRST_ITEM}
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
          data={ENTRIES1}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={false}
          firstItem={SLIDER_1_FIRST_ITEM}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          loop={true}
          loopClonesPerSide={2}
          onSnapToItem={index => this.setState({slider1ActiveSlide: index})}
        />
      </ScrollView>
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
