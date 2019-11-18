
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import Home from '../pages/Home.js';
import CoursePage from '../containers/CoursePageContainer';
import DownloadedVideos from '../pages/DownloadedVideos.js';

const CourseNavigator = createStackNavigator(
  {
    CoursePage: CoursePage,
    Home: Home
  },
  {
    initialRouteName: 'Home',
  },
);

const TabNavigator  = createBottomTabNavigator({
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
    });
export default TabNavigator;
