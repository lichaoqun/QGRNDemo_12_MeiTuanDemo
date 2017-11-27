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
    TouchableOpacity,
    ScrollView
} from 'react-native';

import {StackNavigator} from "react-navigation";

import {width, height} from '../Main/QGCellStyle'
import QGTopView from './QGTopView'
import QGTopListView from './QGTopListView'
import TopMenu from '../../LocalData/TopMenu.json'
import TopMenu1 from '../../LocalData/TopMenu1.json'
import QGHomeMiddleView from './QGHomeMiddleView'
import QGHomeMiddleBottomView from './QGHomeMiddleBottomView'


export default class QGHome extends Component<{}> {

    static navigationOptions = {
        title: '首页',    //设置navigator的title
        header : null
    }

    render() {
        return (
            <View style={styles.container}>
                {this._renderNavBar()}
                <ScrollView>
                    {this._renderTopView()}
                    {this._renderMiddleTopView()}
                    {this._renderMiddleBottmView()}
                </ScrollView>
            </View>
        );
    }

    _renderNavBar(){
        return(
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
        )
    }

    _renderTopView(){
        return(
            //<QGTopView
            //    dataArr = {TopMenu.data}
            ///>
            <QGTopListView
                dataArr = {TopMenu1.data}
            />
        )
    }

    _renderMiddleTopView(){
        return (
            <QGHomeMiddleView/>
        )
    }

    _renderMiddleBottmView(){
        return (
            <QGHomeMiddleBottomView/>
        )
    }



    /* 点击事件监听 */
    _onSetLocalClick(){
        console.log(`${this} + _onSetLocalClick`);
    }

    _onMessageClick(){
        console.log(`${this} + _onMessageClick`);
    }

    _onScanClick(){
        console.log(`${this} + _onScanClick`);
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee',
    },

    NavStyle :{
        width : width,
        height : 64,
        backgroundColor : 'rgba(255, 96, 0, 1.0)',
        flexDirection : 'row',
        justifyContent : 'center',
        flexDirection : 'row',

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