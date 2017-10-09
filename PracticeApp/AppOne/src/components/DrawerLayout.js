import React, {Component} from 'react';
import {Dimensions, Text, TouchableOpacity, View,ToastAndroid} from 'react-native';
import FIrebaseContainer from "../common/FIrebaseContainer";

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
                {this.drawerItem("Add Product",()=>{
                    navigate("AddProduct")
                })}
                {this.drawerItem("Sign Out",()=>{
                    (new FIrebaseContainer()).getAuth().signOut().then(() => {
                        navigate("SignIn");
                    }).catch((err) => {
                            ToastAndroid.show('There was an error while signing out!', ToastAndroid.SHORT);
                        });

                })}
            </View>
        );
    }
}