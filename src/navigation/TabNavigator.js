
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import Home from '../containers/CourseHomeContainer';
import CoursePageContainer from '../containers/CoursePageContainer';
import DownloadedVideos from '../pages/DownloadedVideos.js';

const CourseNavigator = createStackNavigator(
  {
    CoursePage: CoursePageContainer,
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
