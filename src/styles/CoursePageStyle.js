import {StyleSheet} from 'react-native';
import {colors} from './base';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 20,
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
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    borderBottomWidth: 2,
    borderBottomRightRadius: 1,
    borderBottomColor: '#999',
  },
  courseDescription: {
    marginBottom: 10,
    marginLeft: 10,
    fontWeight: '100',
    borderBottomColor: '#999',
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
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  linkItem: {
    color: colors.tertiary,
    marginTop: 5,
  },
  textNoVideo: {
    fontSize: 48,
    color: 'red',
  },
  separatorView: {
    height: 0.5,
    backgroundColor: '#E5E5E5',
  },
});
