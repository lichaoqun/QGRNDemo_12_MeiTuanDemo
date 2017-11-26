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

import {width, height} from '../Main/QGCellStyle'



export default class QGMineBaseCell extends Component<{}> {

    static defaultProps = {
        cellTitle : '',
        cellIconName : ''
    }

    render() {
        return (
            <TouchableOpacity
                onPress = {()=>{
                    console.log(this.props.cellTitle);
                }}
            >
                <View style = {QGCommonStyle.bgContentViewStyle}>
                    <Image
                        source = {{uri : this.props.cellIconName}}
                        style = {styles.iconStyle}
                    />
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

const styles = StyleSheet.create({
    iconStyle : {
        width : 24,
        height : 24,
        marginLeft : 10,
        borderRadius : 12
    }
});