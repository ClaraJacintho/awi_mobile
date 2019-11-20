import React from 'react';
import {Text, View} from 'react-native';
import AuthContainer from '../containers/AuthContainer';
import styles from '../styles/LoginStyles';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Polyteach</Text>
        <AuthContainer navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: dimensions.fullWidth,
    backgroundColor: colors.background,
  },
  header: {
    width: dimensions.fullWidth / 2,
    height: dimensions.fullHeight / 8 

  },
  textField: {
    width: dimensions.fullWidth / 2,
    backgroundColor: colors.primary,
    marginBottom: padding.sm,
  },
});