import React, {Component} from 'react';
import {Button, Dimensions, Text, TextInput, View} from 'react-native';
import FIrebaseContainer from "../common/FIrebaseContainer";

export class AddProduct extends Component {

    static navigationOptions = {
        title: "AddProduct"
    };

    win = null;
    navigation = null;

    state = {
        title:"",
        price:"",
    };

    componentDidMount() {
        this.win = Dimensions.get("window");
        this.navigation = this.props.navigation;
    }

    addProduct(){
        let firebase = new FIrebaseContainer();
        firebase.saveProduct({
            title:this.state.title,
            price:this.state.price
        });
    }

    render() {
        return (
            <View style={{flex: 1,flexDirection:"row",justifyContent:"center"}}>
                <View style={{width:"80%",alignSelf:"center",zIndex:1}}>
                    <Text style={{alignSelf:"center",color:"#000",fontSize:20}}>ADD PRODUCT</Text>
                    <TextInput placeholder={"Enter Product Title"}
                               onChangeText={(text) => {
                                   this.setState({
                                       title: text
                                   });
                               }}
                               value={this.state.title}
                    />
                    <TextInput placeholder={"Enter Product Price"}
                               keyboardType={"numeric"}
                               onChangeText={(text) => {
                                   this.setState({
                                       price: text
                                   });
                               }}
                               value={this.state.price}
                    />
                    <Button title={"ADD"}  onPress={()=>{
                        this.addProduct();
                    }} />
                </View>
            </View>
        );
    }
}