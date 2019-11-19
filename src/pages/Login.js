import React from 'react';
import {Text, View, Linking, Platform} from 'react-native';
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
        <AuthContainer />
      </View>
    );
  }
}
