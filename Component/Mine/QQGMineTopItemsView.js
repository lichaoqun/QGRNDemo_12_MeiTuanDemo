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


export default class QQGMineTopItemsView extends Component<{}> {

    static defaultProps = {
        titleResult : '',
        title : '',
        showRightSep : false,
    }

    render(){


        var stylesArr;
        if(this.props.showRightSep){
            stylesArr = [styles.bgStyle, {backgroundColor : 'rgba(255, 96, 0, 1.0)'}, styles.sepStyle ];
        }else{
            stylesArr = [styles.bgStyle, {backgroundColor : 'rgba(255, 96, 0, 1.0)'} ];
        }

        return(

            <View  style = {stylesArr}>
                <TouchableOpacity
                    style = {styles.bgStyle}
                    onPress = {()=>{
                        this._onItemClick();
                    }}
                >
                    <Text
                        style = {styles.titleResultStyle}
                    >
                        {this.props.titleResult}
                    </Text>
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
        backgroundColor : 'rgba(255, 255, 255, 0.8)',
        width : width / 3,
        height : 50,
        flexDirection : 'column',
        alignItems : 'center',
    },

    titleResultStyle : {
        marginTop : 5,
        color : 'white',
    },

    titleStyle : {
        marginTop : 5,
        color : 'white',
    },

    sepStyle : {
            borderRightColor : 'white',
            borderRightWidth : 0.5,
        }
});