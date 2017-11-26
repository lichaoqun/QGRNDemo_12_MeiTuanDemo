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
    TouchableOpacity
} from 'react-native';

import {StackNavigator} from "react-navigation";

import {width, height} from '../Main/QGCellStyle'

import QGMineBaseCell from './QGMineBaseCell'
import {QGCommonStyle} from '../Main/QGCellStyle'

export default class QGMineItemView extends Component<{}> {

    static defaultProps = {
        iconName : '',
        title : '',
        itemWidth : width / 4,
    }

    render(){
        return(

            <View>
                <TouchableOpacity
                    style = {[styles.bgStyle, {width : this.props.itemWidth}]}
                    onPress = {()=>{
                        this._onItemClick();
                    }}
                >
                    <Image
                        source  = {{uri : this.props.iconName}}
                        style = {styles.iconStyle}
                    />
                    <Text
                        style = {styles.titleStyle}
                    >
                        {this.props.title}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    _onItemClick(){
        console.log(this.props.title);
    }
}

const styles = StyleSheet.create({

    bgStyle : {
        backgroundColor : 'white',
        height : 65,
        flexDirection : 'column',
        alignItems : 'center',
    },

    iconStyle : {
        width : 28,
        height : 28,
        backgroundColor : 'white',
        marginTop : 5,
    },

    titleStyle : {
        marginTop : 5,
        color : '#777777'
    }
});