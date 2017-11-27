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

export default class QGHomeMiddleBottomView extends Component<{}> {
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
            <View style = {styles.topBgStyle}>
            </View>
        )
    }

    _renderBottomView(){

        var itemViewArr = [];
        var itemDataArr = [...HomeTopMiddleLeft.dataRight,...HomeTopMiddleLeft.dataRight];
        itemDataArr.forEach((value, index)=>{
            itemViewArr.push(
                <QGMiddleItemView
                    itemData = {value}
                />
            )
        })
        return(
            <View style = {styles.bottomBgStyle}>
                {itemViewArr}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contentBgStyle:{
        flexDirection : 'row',
        width : width,
        backgroundColor : 'white',
        alignItems : 'center',
        marginTop : 10,
        flexWrap : 'wrap'
    },

    topBgStyle:{
        width:width,
        height : 40,
        alignItems : 'center',
    },

    bottomBgStyle:{
        flexDirection : 'row',
        backgroundColor : 'white',
        width:width,
        flexWrap : 'wrap',
        marginLeft : 10,
    }
});