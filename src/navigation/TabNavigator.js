
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import Home from '../pages/Home.js';
import CoursePage from '../pages/CoursePage.js';
import DownloadedVideos from '../pages/DownloadedVideos.js';

const CourseNavigator = createStackNavigator(
  {
    Home: Home,
    CoursePage: CoursePage
  },
  {
    initialRouteName: 'Home',
  },
);

const TabNavigator  = createBottomTabNavigator({
  Home: {
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
});
export default TabNavigator;
