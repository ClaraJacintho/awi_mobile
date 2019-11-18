import React from 'react'
import { createSwitchNavigator } from 'react-navigation'
import TabNavigator from'./TabNavigator.js/'
// import AuthNavigator from'./AuthNavigator.js/'
import Example from '../pages/TestPage.js'
//import Home from '../pages/Home.js'
import Login from '../pages/Login.js'


const AppNavigator = createSwitchNavigator({
  Loading: {
    screen: Example,
  },
  Auth: {
    screen: Login,
  },
  App: {
    screen: TabNavigator,
  },
});

export default AppNavigator;