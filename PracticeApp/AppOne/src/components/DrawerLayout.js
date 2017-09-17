import React, {Component} from 'react';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';

export class DrawerLayout extends Component {

    drawerItem(title,onPress){
        return (
            <TouchableOpacity style={{padding:20}} onPress={onPress}>
                <Text>{title}</Text>
            </TouchableOpacity>
        )
    }


    render() {
        const {navigate} = this.props.drawerProp.navigation;
        const win = Dimensions.get("window");

        return (
            <View style={{flex:1}}>
                {this.drawerItem("Home",()=>{
                    navigate("Home")
                })}
                {this.drawerItem("Category",()=>{
                    navigate("Category")
                })}
            </View>
        );
    }
}