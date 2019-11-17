import {createStackNavigator} from 'react-navigation-stack';
import Login from './pages/Login.js';
import Home from './pages/Home.js';
import Test from './containers/testContainers.js'

const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Home: Test,
  },
  {
    initialRouteName: 'Login',
  },
);

export default AppNavigator;
