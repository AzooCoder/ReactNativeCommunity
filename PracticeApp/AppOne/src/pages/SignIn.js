import React, {Component} from 'react';
import {Button, Dimensions, Text, TextInput, View, ToastAndroid, ActivityIndicator} from 'react-native';
import FIrebaseContainer from "../common/FIrebaseContainer";
import {Loading} from "../components/Loading";

export class SignIn extends Component {

    static navigationOptions = {
        title: "SignIn",
        header: null
    };

    state = {
        email: "",
        password: "",
        loading:false
    };

    win = null;
    navigation = null;

    firebaseContainer;

    componentDidMount() {
        this.win = Dimensions.get("window");
        this.navigation = this.props.navigation;
        this.firebaseContainer = new FIrebaseContainer();
        this.unsubscribe = this.firebaseContainer.getAuth().onAuthStateChanged((user) => {
            if (user) {
                console.log(user);
               this.props.navigation.navigate("AddProduct");
            }
        });
    }

    signIn(){
        if(!this.state.email || this.state.email.length === 0){
            ToastAndroid.show('Please enter email', ToastAndroid.SHORT);
            return;
        }
        if(!this.state.password || this.state.password.length === 0){
            ToastAndroid.show('Please enter Password', ToastAndroid.SHORT);
            return;
        }

        this.setState({
            loading:true
        });

        this.firebaseContainer.signIn(
            this.state.email,
            this.state.password,
            (user) => {
                console.log(user);
                ToastAndroid.show('Signed In', ToastAndroid.SHORT);
                this.setState({
                    loading:false
                });
            },
            (error) => {
                ToastAndroid.show('Invalid username/password or internet connection error', ToastAndroid.SHORT);
                this.setState({
                    loading:false
                });
            }
        )
    }

    render() {
        return (
            <View style={{flex: 1,flexDirection:"row",justifyContent:"center"}}>
                <View style={{width:"80%",alignSelf:"center",zIndex:1}}>
                    <Text style={{alignSelf:"center",color:"#000",fontSize:20}}>SIGN IN</Text>
                    <TextInput placeholder={"Enter your email"}
                               onChangeText={(text) => {
                                   this.setState({
                                       email: text
                                   });
                               }}
                               value={this.state.email}
                    />
                    <TextInput placeholder={"Enter your password"}
                               onChangeText={(text) => {
                                   this.setState({
                                       password: text
                                   });
                               }}
                               value={this.state.password}
                               secureTextEntry={true}
                    />
                    <Button title={"SIGN IN"}  onPress={()=>{
                        this.signIn();
                    }} />
                </View>

                {this.state.loading && <Loading/>}
            </View>
        );
    }
}