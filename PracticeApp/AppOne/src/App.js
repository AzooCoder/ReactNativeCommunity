import React, {Component} from 'react';
import {DrawerNavigator, StackNavigator, TabNavigator} from "react-navigation";
import Home from './pages/Home';
import {Splash} from "./pages/Splash";
import {DrawerLayout} from "./components/DrawerLayout";
import {Category} from "./pages/Category";
import FIrebaseContainer from "./common/FIrebaseContainer";
import {Text, TouchableOpacity, View} from "react-native";
import {SignIn} from "./pages/SignIn";
import {AddProduct} from "./pages/AddProduct";


const TabNav = TabNavigator({
    Category:{screen:Category},
    CategoryOne:{screen:Category}
},{
    tabBarPosition:"bottom",
    tabBarOptions:{
        showIcon:true,
        indicatorStyle:{
            display:"none"
        }
    }
});

const DrawerNav = DrawerNavigator({
    Home:{screen:Home},
    CategoryTabs:{screen:TabNav}
},{
    initialRouteName:"CategoryTabs",
    contentComponent: props => <DrawerLayout drawerProp={props}/>
});

const MainNavigator = StackNavigator({
    Splash:{screen:Splash},
    SignIn:{screen:SignIn},
    AddProduct:{screen:AddProduct},
    DrawerApp:{screen:DrawerNav}
},{
    initialRouteName:"SignIn",
    navigationOptions: ({navigation}) => ({
        headerLeft:(
            <TouchableOpacity onPress={()=>{
                navigation.navigate("DrawerOpen")
            }}>
                <Text>Drawer</Text>
            </TouchableOpacity>
        )
    })
});


export class App extends Component {
    state = {
      myData:{}
    };
    componentDidMount(){
       /* let firebase = new FIrebaseContainer();
        firebase.savePosts({
            title:"TEST",
            abc:"Hello"
        });

        firebase.getFirebase() .database()
            .ref('posts/1234').on("value",this.onData);*/
    }

    onData = (snapshot) =>{
        /*this.setState({
            myData:snapshot.val()
        });
        */
        console.log(snapshot.val());
    };

    render() {
        return (
            <View style={{flex:1}}>
               <MainNavigator/>
            </View>
        );
    }
}