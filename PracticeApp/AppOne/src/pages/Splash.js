import React, {Component} from 'react';
import {Dimensions, Image, View} from 'react-native';

export class Splash extends Component {

    static navigationOptions = {
        header:null
    };

    componentDidMount(){
        const {navigate} = this.props.navigation;
        setTimeout(()=>{
            navigate("Home")
        },4000);
    }

    render() {
        const {navigate} = this.props.navigation;
        const win = Dimensions.get("window");

        return (
            <View style={{flex:1,backgroundColor:"#fff"}}>
                <Image source={require('./../assets/images/logo.png')}
style={{width:200,height:200,position:"absolute",alignSelf:"center",top:(win.height/2)-100}}/>
            </View>
        );
    }
}