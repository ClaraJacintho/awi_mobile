// From https://medium.com/mindorks/everything-to-know-about-styling-in-react-native-7e30aed53ad
import {Dimensions} from 'react-native';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
};

export const colors = {
  primary: '#F5F5F5',
  secondary: '#475B63',
  tertiary: '#729B79',
  black: '#1a1917',
  gray: '#888888',
  dark: '#171818',
  background: '#111111',
  background_modal: ' #000000',
  white: '#dddada',
  green: '#1cb831',
  green_modal: '#5cdf5c',
  modal_grey:'#acabab',
  modal_grey_2: 'rgb(122, 122, 122)',
  red: '#e21221',
  red_2: '#f80616de',
  dark_blue: '#082452',
  light_blue: '#0f3d81',
  light_blue_2: '#2b2da5',
  purple: '#2f48df',
  dark_purple:'#4B0082',
  light_purple:'#9370DB',
  dark_grey:'#383838'

};

export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40,
};

export const fonts = {
  primary:'roboto',
  sm: 12,
  md: 18,
  lg: 28,
};
