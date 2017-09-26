import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {DrawerNavigator, StackNavigator, TabNavigator} from "react-navigation";
import Home from './pages/Home';
import {Splash} from "./pages/Splash";
import {DrawerLayout} from "./components/DrawerLayout";
import {Category} from "./pages/Category";
import FIrebaseContainer from "./common/FIrebaseContainer";


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
    DrawerApp:{screen:DrawerNav}
},{
    initialRouteName:"DrawerApp",
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
        let firebase = new FIrebaseContainer();
        firebase.savePosts({
            title:"TEST",
            abc:"Hello"
        });

        firebase.getFirebase() .database()
            .ref('posts/1234').on("value",this.onData);
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
                {/*<Text>{this.state.myData}</Text>*/}
            </View>
        );
    }
}