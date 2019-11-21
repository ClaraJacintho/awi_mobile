import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import AuthContainer from '../containers/AuthContainer';
import {colors, dimensions, padding} from '../styles/base';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/PolyTeach_Logo_RGB.png')}
          style={styles.header}
        />
        <AuthContainer navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: dimensions.fullWidth,
    backgroundColor: colors.background,
  },
  header: {
    width: dimensions.fullWidth / 2,
    height: dimensions.fullHeight / 8,
  },
  textField: {
    width: dimensions.fullWidth / 2,
    backgroundColor: colors.primary,
    marginBottom: padding.sm,
  },
});
