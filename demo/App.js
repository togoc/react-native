import React, { Component } from 'react';
import { Text, View,StyleSheet,Button } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
        <View style={style.view}>
          <Text>Hello, world!</Text>
          <Text style={style.txt}>
            游戏刚刚开始
          </Text>
        </View>
    );
  }
}


const style = StyleSheet.create({
  view :{
    backgroundColor:'gray',
    flex:1,
    //  justifyContent: "center",
      // alignItems: "center",
      width:'50%',
      height:'50%'
  },
  txt:{
    color:'red'
  }
})