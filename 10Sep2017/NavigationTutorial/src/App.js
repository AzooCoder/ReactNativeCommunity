import React, {Component} from 'react';
import {Dimensions, Text, View} from 'react-native';
import {StackNavigator} from "react-navigation";
import {Splash} from "./pages/Splash";
import {Home} from "./pages/Home";

const MainAppNavigator = StackNavigator({
    Splash:{
        screen:Splash
    },
    Home:{
        screen:Home
    }
},{
    initialRouteName:"Splash"
});

export class App extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <MainAppNavigator/>
            </View>
        );
    }
}