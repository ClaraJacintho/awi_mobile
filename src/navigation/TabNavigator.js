import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import {colors} from './../styles/base.js';
import Home from '../pages/Home.js';
import CoursePage from '../pages/CoursePage.js';
import DownloadedVideos from '../pages/DownloadedVideos.js';
import Settings from '../pages/Settings.js';
import VideoPage from '../pages/Video.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faDownload, faCog } from '@fortawesome/free-solid-svg-icons'

const icon_color = colors.white

const CourseNavigator = createStackNavigator(
  {
    CoursePage: CoursePage,
    Home: Home,
  },
  {
    initialRouteName: 'Home',
  },
);

const TabNavigator = createBottomTabNavigator(
  {
    Courses: {
      screen: CourseNavigator,
      navigationOptions: {
        tabBarLabel: 'Home',
      },
    },
    Downloads: {
      screen: DownloadedVideos,
      navigationOptions: {
        tabBarLabel: 'Downloads',
      },
    },
  },
  {
    initialRouteName: 'Courses',
  },
);
export default TabNavigator;
