import {createStackNavigator} from 'react-navigation-stack';
import Login from '../pages/Login.js';
import TabNavigator from './TabNavigator.js'

const AppNavigator = createStackNavigator(
  {
    Login: Login,
    App: TabNavigator
  },
  {
    initialRouteName: 'Login',
  },
);

export default AppNavigator;
