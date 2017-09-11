import React, {Component} from 'react';
import {Dimensions, Text, View} from 'react-native';

export class Home extends Component {

    static navigationOptions = {
        title:"Home"
    };

    render() {
        const {state} = this.props.navigation;
        return (
            <View style={{flex: 1,backgroundColor:"#ccc"}}>
                <Text style={{marginTop:200,alignSelf:"center",fontSize:30}}>{state.params.testParam} , {state.params.name}</Text>

            </View>
        );
    } 
}