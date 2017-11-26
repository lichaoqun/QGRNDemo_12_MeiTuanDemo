/**
 * Created by QG on 2017/11/23.
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

import QGMineNormalCell from './QGMineNormalCell'
import QGMineNormalWithTextCell from './QGMineNormalWithTextCell'
import QGMineTwoImageCell from './QGMineTwoImageCell'
import QGMineItemView from './QGMineItemView'
import QQGMineTopItemsView from './QQGMineTopItemsView'

import {width, height} from '../Main/QGCellStyle'
import QGMineItems from './QGMineItems.json'

export default class QGMine extends Component<{}> {

    static navigationOptions = {
        title: '我的',    //设置navigator的title
        header : null
    }

    render() {
        return (
            <View style = {styles.bgContentViewStyle}>
                {this._renderNav()}
                {this._renderTopView()}
                {this._renderCell()}
            </View>
        )
    }

    _renderNav(){
        return (
            <View style = {styles.NavStyle}>
                <View style = {styles.topViewStyle}>

                    {/* 左边的按钮 */}
                    <TouchableOpacity
                        onPress = {()=>{
                            this._onSetLocalClick();
                        }}
                    >
                        <View style = {styles.topTextBgStyle}>
                            <Text style = {styles.topTextStyle}>
                                广州
                            </Text>
                        </View>
                    </TouchableOpacity>

                    {/* 中间的搜索框 */}
                    <TextInput
                        placeholder = '输入商家、品类、商圈'
                        style = {styles.topInputStyle}
                    />

                    {/* 右边的铃声按钮 */}
                    <TouchableOpacity
                        onPress = {()=>{
                            this._onMessageClick(this);
                        }}
                    >
                        <Image
                            source = {{uri : 'icon_homepage_message'}}
                            style = {styles.topImageStyle}
                        />
                    </TouchableOpacity>

                    {/* 右边的二维码按钮 */}
                    <TouchableOpacity
                        onPress = {()=>{
                            this._onScanClick();
                        }}
                    >
                        <Image
                            source = {{uri : 'icon_homepage_scan'}}
                            style = {styles.topImageStyle}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    _renderTopView(){
        return(
            <View style = {{flexDirection : 'row'}}>
                <QQGMineTopItemsView
                    titleResult = {'100'}
                    title = {'码哥券'}
                    showRightSep = {true}
                />

                <QQGMineTopItemsView
                    titleResult = {'12'}
                    title = {'评价'}
                    showRightSep = {true}
                />

                <QQGMineTopItemsView
                    titleResult = {'50'}
                    title = {'收藏'}
                    showRightSep = {false}
                />

            </View>
        )
    }
    _renderCell() {
        return (
            <View>
                <View>
                    <QGMineNormalCell
                        cellTitle = {'我的订单'}
                        cellIconName = {'collect'}
                    />
                    <View style = {{flexDirection : 'row'}}>
                        { this._renderItems()}
                    </View>
                </View>
                <View style = {{marginTop : 10}}>
                    <QGMineNormalWithTextCell
                        cellTitle = {'小码哥钱包'}
                        cellIconName = {'draft'}
                        otherText = {'账户余额:¥100'}
                    />
                    <QGMineNormalWithTextCell
                        cellTitle = {'抵用券'}
                        cellIconName = {'like'}
                        otherText = {'0'}
                    />
                </View>

                <View style = {{marginTop : 10}}>
                    <QGMineNormalCell
                        cellTitle = {'积分商城'}
                        cellIconName = {'card'}
                    />
                </View>

                <View style = {{marginTop : 10}}>
                    <QGMineTwoImageCell
                        cellTitle = {'今日推荐'}
                        cellIconName = {'new_friend'}
                        iconName = {'me_new'}
                    />
                </View>

                <View style = {{marginTop : 10}}>
                    <QGMineNormalWithTextCell
                        cellTitle = {'我要合作'}
                        cellIconName = {'pay'}
                        otherText = {'轻松开店,招财进宝'}
                    />
                </View>
            </View>
        )
    }

    _renderItems(){
        var items = [];
        QGMineItems.forEach((value, index)=>{
            items.push(
                <QGMineItemView
                    iconName = {value.iconName}
                    title  = {value.title}
                />
            )
        });
        return items;
    }

}

const styles = StyleSheet.create({

    bgContentViewStyle:{
        flex : 1,
        backgroundColor : '#F4F4F4',
        flexDirection : 'column',
    },

    NavStyle :{
        width : width,
        height : 64,
        backgroundColor : 'rgba(255, 96, 0, 1.0)',
        flexDirection : 'row',
        justifyContent : 'center',
    },

    // - 顶部的 view 的属性
    topViewStyle : {
        width : width,
        height : 40,
        flexDirection : 'row',
        justifyContent : 'center',
        marginTop : 25,
    },

    // 输入框的属性
    topInputStyle : {
        backgroundColor : 'white',
        width : width * 0.6,
        height : 30,
        marginLeft : 8,
        borderRadius : 15,
        paddingLeft : 10,
    },

    topTextStyle : {
        color : 'white',
        fontSize : 18
    },

    topTextBgStyle:{

        height : 30,
        justifyContent : 'center',
        alignItems : 'center',
    },

    // - 图片的属性
    topImageStyle:{
        width : 30,
        height : 30,
        marginLeft : 8,
    }
});