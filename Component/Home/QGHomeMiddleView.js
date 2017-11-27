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
                {this._renderLeftView()}
                {this._renderRightView()}

            </View>
        )
    }
    _renderLeftView(){
      var itemData = HomeTopMiddleLeft.dataLeft[0];
        console.log(itemData.img1);
        return (
            <View style = {styles.leftBgStyle}>
                <Image
                    style = {{width :156 / 2 , height : 50 / 2}}
                    source = {{uri : itemData.img1}}
                />
                <Image
                    style = {{width :128 /2 , height :85 /2 }}
                    source = {{uri : itemData.img2}}
                />
                <Text style = {{color : '#999999', fontSize : 13}}>
                    {itemData.title}
                </Text>
                <View style = {{flexDirection : 'row'}}>
                    <Text style = {{color : '#99FFFF', fontSize : 11}}>
                        {itemData.price}
                    </Text>
                    <Text style = {{color : '#FF3333', fontSize : 11, backgroundColor : '#FFFF00'}}>
                        {itemData.sale}
                    </Text>
                </View>
            </View>
        )
    }

    _renderRightView(){

        var itemViewArr = [];
        var itemDataArr = HomeTopMiddleLeft.dataRight;
        itemDataArr.forEach((value, index)=>{
            itemViewArr.push(
                <QGMiddleItemView
                    itemData = {value}
                    callBack = {
                    (e)=>{
                        console.log(e, this);
                    }}
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