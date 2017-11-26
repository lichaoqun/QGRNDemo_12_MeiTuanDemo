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

export default class QGMineNormalCell extends QGMineBaseCell<{}> {

    _getRightView(){
        return (
            <Image
                source = {{uri : 'icon_cell_rightArrow'}}
                style = {QGCommonStyle.normalIconStyle}
            />

        )
    }
}