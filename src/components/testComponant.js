import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
//import { connect } from 'react-redux';

export default class FlatListBasics extends React.Component {

  constructor(props){
    super(props);
    this.state = {
       names: this.props.names,
    };
    this.handleClick= this.handleClick.bind(this);
  }

  handleClick(e) {
       console.log(this.state);
     this.props.askTest();
  }

  render() {
    return (
      <View style={styles.container}>
      <Button title={'FetchUser'} onPress={this.handleClick}></Button>
        <FlatList
          data= {this.state.names}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  };
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
