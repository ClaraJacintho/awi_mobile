import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingTop: 20,
        paddingBottom: 20
    },
      listitem: {
          fontSize:48, 
          fontWeight:'bold', 
          color:'#333',
          borderBottomWidth: 2,
          borderBottomColor: '#999'
      },
      courseTitle: {
          marginBottom:10,
          textAlign: 'center',
          //backgroundColor: '#999',
          fontWeight:'bold',
          fontSize:20,
          borderBottomWidth: 2,
          borderBottomRightRadius:1,
          borderBottomColor: '#999'
      },
      courseDescription: {
          marginBottom:10,
          marginLeft:10,
          fontWeight:'100',
          //borderBottomWidth: 1,
          borderBottomColor: '#999'
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
      }
  });