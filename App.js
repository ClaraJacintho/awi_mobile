import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/AppNavigator';
import {createAppContainer} from 'react-navigation';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
