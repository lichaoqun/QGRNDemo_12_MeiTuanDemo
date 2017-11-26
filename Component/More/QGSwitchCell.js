/**
 * Created by QG on 2017/11/25.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    Switch
} from 'react-native';

import {StackNavigator} from "react-navigation";

import QGBaseCell from './QGBaseCell'
export default class QGSwitchCell extends QGBaseCell<{}> {

    state = {
        isOn : true
    }

    _getRightView(){

        return (

            <Switch
                value = {this.state.isOn}
                style = {styles.switchStyle}
                onValueChange = {(e)=>{
                    this._onValueChange(e);
                }}
            />

        )
    }


    _onValueChange(e){
        console.log(e);
        this.setState({
            isOn : !this.state.isOn,
        })
    }


}

const styles = StyleSheet.create({
    switchStyle :{
        width : 44,
        height : 44,
        position : 'absolute',
        right : 15,
    }
});