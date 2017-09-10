import React, {Component} from 'react';
import {Dimensions, View} from 'react-native';

export class DrawerHome extends Component {

    static navigationOptions = {
        title: "DrawerHome"
    };

    win = null;
    navigation = null;

    componentDidMount() {
        this.win = Dimensions.get("window");
        this.navigation = this.props.navigation;
    }

    render() {
        return (
            <View style={{flex: 1}}>

            </View>
        );
    }
}