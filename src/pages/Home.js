import React from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {sliderWidth, itemWidth} from '../styles/SliderEntryStyle.js';
import SliderEntry from '../components/SliderEntry';
import styles from '../styles/sliderBaseStyle.js';
import {ENTRIES1} from './../assets/entries';
import {colors, fonts, padding, dimensions} from './../styles/base.js';

const SLIDER_1_FIRST_ITEM = 1;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
    };
  }

  _renderItemWithParallax({item, index}, parallaxProps) {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  }

  render() {
    const {navigation} = this.props;
    //const {navigate} = this.props.navigation;
    return (
      <ScrollView style={componentStyles.container}>
        <Text style={componentStyles.header}>
          {' '}
          Welcome {navigation.getParam('user', 'user')}
        </Text>
        <Text  style={componentStyles.listTitle}>Recently watched</Text>
        <Carousel
          ref={c => (this._slider1Ref = c)}
          data={ENTRIES1}
          renderItem={this._renderItemWithParallax}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={true}
          firstItem={SLIDER_1_FIRST_ITEM}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          loop={true}
          loopClonesPerSide={2}
          onSnapToItem={index => this.setState({slider1ActiveSlide: index})}
          cliiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiick = {console.log("guh")}
        />
        <Text  style={componentStyles.listTitle}>All courses</Text>
        <Carousel
          ref={c => (this._slider1Ref = c)}
          data={ENTRIES1}
          renderItem={this._renderItemWithParallax}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={true}
          firstItem={SLIDER_1_FIRST_ITEM}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          loop={true}
          loopClonesPerSide={2}
          onSnapToItem={index => this.setState({slider1ActiveSlide: index})}
          cliiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiick = {console.log("guh")}
        />
        <Text  style={componentStyles.listTitle}>Finished</Text>
        <Carousel
          ref={c => (this._slider1Ref = c)}
          data={ENTRIES1}
          renderItem={this._renderItemWithParallax}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={true}
          firstItem={SLIDER_1_FIRST_ITEM}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          loop={true}
          loopClonesPerSide={2}
          onSnapToItem={index => this.setState({slider1ActiveSlide: index})}
          cliiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiick = {console.log("guh")}
        />
      </ScrollView>
    );
  }
}

const componentStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  header: {
    textAlign: 'center',
    fontSize: fonts.lg,
    fontFamily: fonts.primary,
    color: colors.primary,
    paddingBottom: padding.md,
  },
  listTitle: {
    fontSize: fonts.lg,
    fontFamily: fonts.primary,
    color: colors.primary,
    paddingBottom: padding.md,
  },
});
