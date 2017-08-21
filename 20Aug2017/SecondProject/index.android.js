/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text, TouchableOpacity,
    View
} from 'react-native';



export default class SecondProject extends Component {

    state = {
        myStr:"Hello World"
    };

    onClick = ()=>{
        this.setState({
            myStr:"Hello World New"
        });
    };

  render() {
      let style = {backgroundColor:"#fff",flex:1,flexDirection:"column"};
    return (
        <View style={style}>
           {/* <View style={{backgroundColor:"#f00",flex:1}} />
            <View style={{backgroundColor:"#0f0",flex:1}} />
            <View style={{backgroundColor:"#00f",flex:1}}  />*/}
            <TouchableOpacity
                onPress={this.onClick}
            >
                <Text style={{alignSelf:"center",fontSize:30}}>{this.state.myStr}</Text>
            </TouchableOpacity>
        </View>
    );
  }
}
AppRegistry.registerComponent('SecondProject', () => SecondProject);
