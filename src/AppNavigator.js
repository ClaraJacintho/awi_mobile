import {createStackNavigator} from 'react-navigation-stack';
import Login from './pages/Login.js';
import Home from './pages/Home.js';

const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Home: Home,
  },
  {
    initialRouteName: 'Login',
  },
);

export default AppNavigator;
