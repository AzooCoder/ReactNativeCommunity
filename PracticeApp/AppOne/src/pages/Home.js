import React, {Component} from 'react';
import {Dimensions, View} from 'react-native';

export default class Home extends Component {

    static navigationOptions = {
        title:"Home"
    };

    render() {
        const {navigate} = this.props.navigation;
        const win = Dimensions.get("window");

        return (
            <View style={{backgroundColor:"#f00"}}>

            </View>
        );
    }
}