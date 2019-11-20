import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/SliderEntryStyle';

export default class SliderEntry extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    even: PropTypes.bool,
    parallax: PropTypes.bool,
    parallaxProps: PropTypes.object,
  };

  get image() {
    const {
      data: {picture},
    } = this.props;

    return <Image source={{uri: picture}} style={styles.image} />;
  }

  render() {
    const {
      data: {name, description, id, teacher, averageRating},
      even,
    } = this.props;

    const uppercaseTitle = name ? (
      <Text
        style={[styles.title, even ? styles.titleEven : {}]}
        numberOfLines={2}>
        {name.toUpperCase()}
      </Text>
    ) : (
      false
    );
    const {click} = this.props;
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.slideInnerContainer}
        onPress={() => {
          click(id, name);
        }}>
        <View style={styles.shadow} />
        <View
          style={[
            styles.imageContainer,
            even ? styles.imageContainerEven : {},
          ]}>
          {this.image}
          <View
            style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]}
          />
        </View>
        <View style={[styles.columnContainer, even ? styles.columnContainerEven : {}]}>
          <View style={styles.textContainer }>
            {uppercaseTitle}
            <Text
              style={[styles.description, even ? styles.subtitleEven : {}]}
              numberOfLines={2}>
              {description}
            </Text>
            <Text
              style={[styles.prof, even ? styles.subtitleEven : {}]}
              numberOfLines={2}>
              {teacher.firstName + " " + teacher.lastName}
            </Text>
          </View>
          <View>
            <Text
              style={[styles.prof, even ? styles.subtitleEven : {}]}
              numberOfLines={2}>
              {averageRating+"/10"}
            </Text>
        </View>
        </View>
      </TouchableOpacity>
    );
  }
}
