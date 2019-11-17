import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/AppNavigator';
import {createAppContainer} from 'react-navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ReduxNetworkProvider, NetworkConsumer } from 'react-native-offline';
import { persistor, store } from './store';
import '@react-native-community/netinfo';

const AppContainer = createAppContainer(AppNavigator);

const Loading=()=>(<div>Loading...</div>)

export default class App extends React.Component {

  render() {
    return (
        <Provider store={store}>
            <PersistGate /*loading={<Loading/>}*/ persistor={persistor}>
                <ReduxNetworkProvider pingTimeout= {10000}
                                 pingServerUrl = {'https://www.google.com/'}
                                 shouldPing = {true}
                                 pingInterval = {0}
                                 pingOnlyIfOffline = {false}
                                 pingInBackground = {false}
                                 httpMethod = {'HEAD'}>

                    <AppContainer/>
                </ReduxNetworkProvider>
            </PersistGate>
        </Provider>
    )
  }
}
