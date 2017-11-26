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
    TouchableOpacity
} from 'react-native';

import {StackNavigator} from "react-navigation";

import {QGCommonStyle} from '../Main/QGCellStyle'


export default class QGBaseCell extends Component<{}> {

    static defaultProps = {
        cellTitle : '',
    }

    render() {
        return (
            <TouchableOpacity
                onPress = {()=>{
                    console.log(this.props.cellTitle);
                }}
            >
                <View style = {QGCommonStyle.bgContentViewStyle}>
                    <Text
                        style = {QGCommonStyle.titleStyle}
                    >
                        {this.props.cellTitle}
                    </Text>

                    {this._getRightView()}
                </View>
            </TouchableOpacity>
        );
    }

    _getRightView(){
        return null;
    }
}
