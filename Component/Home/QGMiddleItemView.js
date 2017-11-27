/**
 * Created by lichaoqun on 2017/11/27.
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

export default class QGMiddleItemView extends Component<{}> {

    static defauleProps = {
        itemData : {title: "天天特价", subTitle: "特惠不打烊", rightImage: "tttj", titleColor: "orange"},
        callBack : (e)=>{},
        name : 1
    }

    render(){
        return(
            <View style = {styles.contentBgStyle}>
                {this._renderLeftView()}
                {this._renderRightView()}
            </View>
        )
    }

    _renderLeftView(){
        return (
            <View style = {styles.leftBgStyle}>
                <TouchableOpacity
                    onPress = {()=>{
                     this._itemClick(this.props.itemData.title)
                }}
                >

                    <Text style = {{color : this.props.itemData.titleColor, fontSize : 17, fontWeight : 'bold'}}>
                        {this.props.itemData.title}
                    </Text>
                    <Text  style = {[styles.textStyle]}>
                        {this.props.itemData.subTitle}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    _itemClick(title){
        if (!this.props.callBack){
            return;
        }else {
            this.props.callBack(this.props.itemData.title)
        }

    }

    _renderRightView(){
        return(
            <View style = {styles.rigthBgStyle}>
                <Image
                    style = {styles.imageStyle}
                    source = {{uri : this.props.itemData.rightImage}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contentBgStyle:{
        flexDirection : 'row',
        width : width / 2,
        alignItems : 'center',
        borderBottomWidth : 0.5,
        borderBottomColor : '#F5F5F5',
    },

    leftBgStyle:{
        flexDirection : 'column',
    },

    rigthBgStyle:{
        marginLeft : 10,
    },

    textStyle : {
        fontSize : 11,
        color : 'gray'
    },

    imageStyle : {
        width : 58,
        height : 43,
    }
});