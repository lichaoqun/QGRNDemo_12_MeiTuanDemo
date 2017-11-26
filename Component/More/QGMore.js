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
import Dimensions from  'Dimensions';
var {width, height} = Dimensions.get('window');
//
import QGNormalCell from './QGNormalCell'
import QGSwitchCell from './QGSwitchCell'
import QGNormalWithTextCell from './QGNormalWithTextCell'

export default class QGMore extends Component<{}> {

    static navigationOptions = {
        title: '我的',    //设置navigator的title
        header : null
    }

    render() {
        return (
            <View style = {styles.bgContentViewStyle}>
                <View style = {styles.NavStyle}>
                    <View style = {styles.topViewStyle}>



                        {/* 更多标题 */}
                        <View style = {styles.topTextBgStyle}>
                            <Text style = {styles.topTextStyle}>
                                更多
                            </Text>
                        </View>


                        {/* 右边的设置按钮 */}
                        <TouchableOpacity
                            onPress = {()=>{
                            this._onSettingClick();
                        }}
                            style = {styles.topImageStyle}
                        >
                            <Image
                                source = {{uri : 'icon_mine_setting'}}
                                style = {styles.topImageStyle}
                            />
                        </TouchableOpacity>
                    </View>
                </View>


                <View style ={{marginTop : 10} }>
                    <QGNormalCell
                        cellTitle = {'扫一扫'}
                    />
                </View>

                <View style ={{marginTop : 10} }>
                    <QGSwitchCell
                        cellTitle = {'省流量'}
                    />
                    <QGNormalCell
                        cellTitle = {'消息提醒'}
                    />
                    <QGNormalCell
                        cellTitle = {'邀请好友使用小码哥电商'}
                    />
                    <QGNormalWithTextCell
                        cellTitle = {'清除缓存'}
                        otherText = {'1.24M'}
                    />
                </View>


                <View style ={{marginTop : 10} }>
                    <QGNormalCell
                        cellTitle = {'意见反馈'}
                    />
                    <QGNormalCell
                        cellTitle = {'问卷调查'}
                    />
                    <QGNormalCell
                        cellTitle = {'支付帮助'}
                    />
                    <QGNormalCell
                        cellTitle = {'网络诊断'}
                    />
                    <QGNormalCell
                        cellTitle = {'关于码团'}
                    />
                </View>

            </View>
        );
    }



    _onSettingClick(){
        console.log(`${this} + _onSettingClick`);
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
        position : 'absolute',
        right : 8,
    }
});