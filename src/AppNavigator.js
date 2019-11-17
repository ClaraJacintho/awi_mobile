import {createStackNavigator} from 'react-navigation-stack';
import Login from './pages/Login.js';
import Home from './pages/Home.js';
import Video from './pages/Video';

const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Home: Home,
    Video: Video,
  },
  {
    initialRouteName: 'Video',
  },
);

export default AppNavigator;
