import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/AppNavigator';
import {createAppContainer} from 'react-navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store';

const AppContainer = createAppContainer(AppNavigator);

const Loading=()=>(<div>Loading...</div>)

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
        <PersistGate /*loading={<Loading/>}*/ persistor={persistor}>
                <AppContainer/>
        </PersistGate>
        </Provider>
    )
  }
}