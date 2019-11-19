import {createStackNavigator} from 'react-navigation-stack';
import Login from '../pages/Login.js';
import TabNavigator from './TabNavigator.js';

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      path: 'app',
    },
    App: TabNavigator,
  },
  {
    initialRouteName: 'Login',
  },
);

export default AppNavigator;
