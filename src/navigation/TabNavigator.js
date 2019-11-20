import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {colors} from '../styles/base';
import Home from '../containers/CourseHomeContainer';
import CoursePageContainer from '../containers/CoursePageContainer';
import DownloadedVideos from '../pages/DownloadedVideos.js';
import Settings from '../pages/Settings.js';
import VideoPage from '../pages/Video.js';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome, faDownload, faCog} from '@fortawesome/free-solid-svg-icons';

const icon_color = colors.white;

const CourseNavigator = createStackNavigator(
  {
    CoursePage: CoursePageContainer,
    VideoPage: VideoPage,
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.dark_grey,
      },
      headerTintColor: colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const TabNavigator = createBottomTabNavigator(
  {
    Courses: {
      screen: CourseNavigator,
      navigationOptions: () => ({
        tabBarIcon: () => (
          <FontAwesomeIcon icon={faHome} color={icon_color} size={24} />
        ),
      }),
    },
    Downloads: {
      screen: DownloadedVideos,
      navigationOptions: () => ({
        tabBarIcon: () => (
          <FontAwesomeIcon icon={faDownload} color={icon_color} size={24} />
        ),
      }),
    },
    Settings: {
      screen: Settings,
      navigationOptions: () => ({
        tabBarIcon: () => (
          <FontAwesomeIcon icon={faCog} color={icon_color} size={24} />
        ),
      }),
    },
  },
  {
    tabBarOptions: {
      showLabel: true, // hide labels
      activeTintColor: colors.white, // active icon color
      inactiveTintColor: colors.modal_grey_2, // inactive icon color
      style: {
        backgroundColor: colors.dark_grey, // TabBar background
      },
    },
  },
  {
    initialRouteName: 'Courses',
  },
);
export default TabNavigator;
