import {StyleSheet} from 'react-native';
import {colors} from './base';

export default StyleSheet.create({
  container: {
    padding: 15,
  },
  descContainer: {
    flexDirection: 'row',
    paddingTop: 15,
  },
  videoTitle: {
    fontSize: 16,
    color: colors.white,
  },
  videoDetails: {
    paddingHorizontal: 15,
    flex: 1,
  },
  videoStats: {
    fontSize: 15,
    paddingTop: 3,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
  },
  linkItem: {
    color: colors.tertiary,
    marginTop: 5,
    fontSize: 15,
  },
});
