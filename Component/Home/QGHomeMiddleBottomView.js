/**
 * Created by QG on 2017/11/26.
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
    ScrollView
} from 'react-native';

import {StackNavigator} from "react-navigation";

import {width, height} from '../Main/QGCellStyle'
import {QGCommonStyle} from '../Main/QGCellStyle'
import QGMineItemView from '../Mine/QGMineItemView'
import QGMiddleItemView from './QGMiddleItemView'

import HomeTopMiddleLeft from '../../LocalData/HomeTopMiddleLeft.json'

export default class QGHomeMiddleView extends Component<{}> {
    render(){
        return(
            <View style = {styles.contentBgStyle}>
                {this._renderTopView()}
                {this._renderBottomView()}

            </View>
        )
    }
    _renderTopView(){
        return (
            <View style = {styles.leftBgStyle}>
            </View>
        )
    }

    _renderBottomView(){

        var itemViewArr = [];
        var itemDataArr = HomeTopMiddleLeft.dataRight;
        itemDataArr.forEach((value, index)=>{
            itemViewArr.push(
                <QGMiddleItemView
                    itemData = {value}
                />
            )
        })
        return(
            <View style = {styles.rigthBgStyle}>
                {itemViewArr}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contentBgStyle:{
        flexDirection : 'row',
        width : width,
        height : 130,
        backgroundColor : 'white',
        alignItems : 'center',
        marginTop : 10
    },

    leftBgStyle:{
        width:width / 2,
        alignItems : 'center',
    },

    rigthBgStyle:{
        backgroundColor : 'white',
        width:width / 2,
        //alignItems : 'center',
        justifyContent : 'center'
    }
});