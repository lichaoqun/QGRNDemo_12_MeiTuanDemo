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

import QGMineBaseCell from './QGMineBaseCell'
import {QGCommonStyle} from '../Main/QGCellStyle'

export default class QGMineNormalWithTextCell extends QGMineBaseCell<{}> {

    static defaultProps = {
        otherText : '',
    }

    _getRightView(){
        return (
            <View style = {QGCommonStyle.bgViewStyle}>

                {/* 文字 */}
                <Text
                    style = {QGCommonStyle.textStyle}
                >
                    {this.props.otherText}
                </Text>

                {/* 图片 */}
                <Image
                    source = {{uri : 'icon_cell_rightArrow'}}
                    style = {QGCommonStyle.normalWithTextIconStyle}
                />

            </View>

        )
    }

}