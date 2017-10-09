import React, {Component} from 'react';
import {ActivityIndicator, Dimensions, Text, View} from 'react-native';

export class Loading extends Component {
    win = null;

    componentDidMount() {
        this.win = Dimensions.get("window");
    }

    render() {
        return (
            <View style={{width:"100%",height:"100%",position:"absolute",top:0,left:0,backgroundColor:"#000",zIndex:2,justifyContent:"center"}}>
                <View style={{alignItems:"center"}}>
                    <ActivityIndicator size={50}/>
                    <Text style={{color:"#fff"}}>Loading</Text>
                </View>
            </View>
        );
    }
}