import React from 'react';
import {Button, StyleSheet} from 'react-native';
import {colors, dimensions} from './../styles/base.js';
import {ScrollView} from 'react-native-gesture-handler';

export default class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    const {navigate} = this.props.navigation;
    this.props.onLogout();
    navigate('Auth');
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Button
          onPress={() => this.logout()}
          title="Sign Out"
          color={colors.purple}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: dimensions.fullWidth,
  },
});
