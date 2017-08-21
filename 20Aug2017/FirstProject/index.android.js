/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text, TouchableOpacity,
    View
} from 'react-native';
import Sample from "./Sample";

export default class FirstProject extends Component {

    state = {
        myStr: "Hello World",
        bg: "#fff"
    };

    onClick = () => {
        //alert("Hello World");
        this.setState({
            myStr: "New Hello World",
            bg: "#f00"
        });
    };

    render() {
        let myStyle = {
            textStyle: {
                fontSize: 30
            }
        };
        return (
            <View style={{backgroundColor: this.state.bg, flex: 1}}>
                {/*<View style={{backgroundColor:"#f00",flex:1}} />
        <View style={{backgroundColor:"#0f0",flex:1}} />*/}
                <TouchableOpacity style={{flex: 1}}
                                  onPress={this.onClick}
                >
                    <Text style={{flex: 1, textAlign: "center", fontSize: 30}}>{this.state.myStr}</Text>
                </TouchableOpacity>
                <Sample text="Hello WOrld Prop"/>
            </View>
        );
    }
}


AppRegistry.registerComponent('FirstProject', () => FirstProject);
