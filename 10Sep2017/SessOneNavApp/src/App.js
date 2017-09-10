import React, {Component} from 'react';
import {Dimensions, Text, View, StyleSheet, StatusBar} from 'react-native';
import {DrawerNavigator, StackNavigator} from "react-navigation";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {DrawerHome} from "./pages/DrawerHome";

const StackNav = StackNavigator({
    Home:{screen:Home},
    About:{screen:About},
    DrawerHome:{screen:DrawerHome}

},{
    navigationOptions:{
        title:"My Navigation App"
    }
});

const MainAppNavigator = DrawerNavigator({
    Stack:{screen:StackNav}
},{

});


export default class App extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <StatusBar translucent barStyle="dark-content" backgroundColor={"rgba(0,0,0,0)"} />
                <MainAppNavigator/>
            </View>
        );
    }
}


