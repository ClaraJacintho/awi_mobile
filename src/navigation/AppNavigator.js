import React from 'react';
import {createSwitchNavigator} from 'react-navigation';
import TabNavigator from './TabNavigator.js/';
// import AuthNavigator from'./AuthNavigator.js/'
import Example from '../pages/TestPage.js';
import Login from '../pages/Login.js';

const AppNavigator = createSwitchNavigator({
  Auth: {
    screen: Login,
    path: 'app',
  },
  App: {
    screen: TabNavigator,
  },
});

export default AppNavigator;
