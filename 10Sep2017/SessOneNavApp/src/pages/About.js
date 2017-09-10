import React, {Component} from 'react';
import {Dimensions, Text, View} from 'react-native';

export class About extends Component {

    static navigationOptions = {
        title:"About"
    };

    render() {
        const {state} = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <Text>{state.params.abc}</Text>
            </View>
        );
    }
}