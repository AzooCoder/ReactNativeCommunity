/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    View,Text
} from 'react-native';

export default class Sample extends Component {


    render() {

        return (
            <Text style={{fontSize:30}}>
                {this.props.text}
            </Text>
        );
    }
}