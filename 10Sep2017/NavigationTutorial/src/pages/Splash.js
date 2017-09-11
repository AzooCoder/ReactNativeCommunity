import React, {Component} from 'react';
import {Button, Dimensions, Text, View} from 'react-native';

export class Splash extends Component {

    static navigationOptions = {
        title: "Splash",
        header:null
    };

    componentDidMount(){
        const {navigate} = this.props.navigation;
        setTimeout(()=>{
            navigate("Home",{testParam:"Hello 1234",name:"asasass"})
        },3000);
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <View style={{marginTop:100,width:200,alignSelf:"center"}}>
                    <Button title={"NAVIGATE TO HOME"} onPress={()=>{
                        navigate("Home")
                    }} />
                </View>

            </View>
        );
    }
}