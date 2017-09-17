import React, {Component} from 'react';
import {Dimensions, Image, View} from 'react-native';

export class Category extends Component {

    static navigationOptions = {
        tabBarLabel: 'Notifications',
        tabBarIcon: ({ tintColor }) => (
            <Image
                resizeMode={"contain"}
                source={require('./../assets/images/noti.png')}
                style={{tintColor: tintColor,width:25,height:25}}
            />
        ),
    };

    render() {
        const {navigate} = this.props.navigation;
        const win = Dimensions.get("window");

        return (
            <View style={{flex:1,backgroundColor:"#000"}}>

            </View>
        );
    }
}