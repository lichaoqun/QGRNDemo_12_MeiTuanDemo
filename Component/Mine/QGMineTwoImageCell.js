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

export default class QGMineTwoImageCell extends QGMineBaseCell<{}> {

    static defaultProps = {
        iconName : ''
    }

    _getRightView(){

        // {cellTitle: "今日推荐", cellIconName: "new_friend", iconName: "me_new"}
        console.log(this.props);

        return (
            <View style = {QGCommonStyle.bgViewStyle}>

                {/* 图片 */}
                <Image
                    source = {{uri : this.props.iconName}}
                    style = {styles.imageViewStyle1}
                />

                {/* 图片 */}
                <Image
                    source = {{uri : 'icon_cell_rightArrow'}}
                    style = {styles.imageViewStyle0}
                />

            </View>

        )
    }

}

const styles = StyleSheet.create({
    imageViewStyle0 :{
        width : 8,
        height : 13,
        marginLeft : 5,
    },

    imageViewStyle1 :{
        width : 24,
        height : 13,
        marginLeft : 5,
    },

});