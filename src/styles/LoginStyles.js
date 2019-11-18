import {StyleSheet} from 'react-native';
import {colors, fonts, padding, dimensions} from './base.js';

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: dimensions.fullWidth,
      backgroundColor: colors.background,
    },
    header: {
      textAlign: 'center',
      fontSize: fonts.lg,
      fontFamily: fonts.primary,
      color: colors.primary,
      paddingBottom: padding.md,
    },
    textField: {
      width: dimensions.fullWidth / 2,
      backgroundColor: colors.primary,
      marginBottom: padding.sm,
    },
  });