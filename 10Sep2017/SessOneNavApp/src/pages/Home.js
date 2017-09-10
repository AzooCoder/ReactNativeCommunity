import React, {Component} from 'react';
import {Button, Dimensions, View} from 'react-native';
import {About} from "./About";

export class Home extends Component {

    state = {
        name:"ABc",
        age:10
    };

    static navigationOptions = {
        title:"Home"
    };

    render() {
        const {navigate} = this.props.navigation;
        const {name,age} = this.state;
        return (
            <View style={{flex: 1}}>
                <View style={{marginTop:100,width:100}}>
                    <Button title={"Navigate To About"} onPress={()=>{
                        navigate("Drawer",{abc:"Hello World"})
                    }} />
                </View>
            </View>
        );
    }
}