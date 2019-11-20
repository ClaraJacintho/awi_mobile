import {StyleSheet} from 'react-native';
import {colors, dimensions, fonts} from './base';

export default StyleSheet.create({
  container: {
    height: dimensions.fullHeight,
    backgroundColor: colors.background,
    paddingBottom: 20,
  },
  pageContainer: {
    backgroundColor: colors.background,
    paddingBottom: 20,
  },
  listitem: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
    borderBottomWidth: 2,
    borderBottomColor: '#999',
  },
  courseTitle: {
    color: colors.white,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 26,
    borderBottomWidth: 2,
    borderBottomRightRadius: 1,
    borderBottomColor: '#999',
  },
  courseDescription: {
    marginBottom: 10,
    marginLeft: 10,
    fontWeight: '100',
    fontSize: 16,
    borderBottomColor: '#999',
    color: colors.white,
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
    borderBottomColor: '#737373',
    borderBottomWidth: 1,
  },
  linkItem: {
    color: colors.purple,
    marginTop: 5,
    fontSize: 15,
  },
  textNoVideo: {
    fontSize: fonts.lg,
    color: 'red',
  },
  separatorView: {
    height: 0.5,
    backgroundColor: '#E5E5E5',
  },
});
