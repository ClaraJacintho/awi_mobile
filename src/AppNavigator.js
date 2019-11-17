import {createStackNavigator} from 'react-navigation-stack';
import Login from './pages/Login.js';
import Home from './pages/Home.js';
import Video from './pages/Video';
import CoursePage from'./pages/CoursePage.js';

const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Home: Home,
    Video: Video,
    CoursePage : CoursePage,
  },
  {
    initialRouteName: 'Login',
  },
);

export default AppNavigator;
