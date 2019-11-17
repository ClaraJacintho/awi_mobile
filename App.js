import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
// import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
