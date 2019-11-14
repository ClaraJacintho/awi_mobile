// From https://medium.com/mindorks/everything-to-know-about-styling-in-react-native-7e30aed53ad
import {StyleSheet, Dimensions} from 'react-native'

export const dimensions = {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width
  }
    
export const colors  = {
    primary: '#F5F5F5',
    secondary: '#475B63',
    tertiary: '#729B79', //#BACDB0, 
    background: '#475B63',
    black: '#1a1917',
    gray: '#888888'
}

export const padding = {
    sm: 10,
    md: 20,
    lg: 30,
    xl: 40
}

export const fonts = {
    sm: 12,
    md: 18,
    lg: 28
   // primary: 'Cochin'
}