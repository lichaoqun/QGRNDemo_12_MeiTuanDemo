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

export default class QGTopView extends Component<{}> {

    state = {
        currentPage : 0,
    }

    render(){
        return(
            <View style={styles.bgStyle} >
                <ScrollView
                    style = {styles.scrollViewStyle}
                    horizontal = {true}
                    pagingEnabled = {true}
                    showsHorizontalScrollIndicator = {false}
                    onMomentumScrollEnd = {(e)=>this.onMomentumScrollEnd(e)}
                >
                    {this._renderScrollView()}
                </ScrollView>

                <View style={{flexDirection : 'row', justifyContent : 'center', width : width, backgroundColor : 'red'}}>
                    {this._renderPageView()}
                </View>
            </View>
        )
    }

    _renderScrollView(){
        var itemArr = [];
        var colorArr = ['orange', 'blue'];

        colorArr.forEach((value, index)=>{
            itemArr.push(
                <View style = {{backgroundColor : 'white', width : width, height : 120, flexDirection : 'row'}}>
                    <QGMineItemView
                        iconName = {'icon_homepage_foottreatCategory'}
                        title = {'足疗按摩'}
                        itemWidth ={ width / 5}
                    />

                    <QGMineItemView
                        iconName = {'icon_homepage_foottreatCategory'}
                        title = {'足疗按摩'}
                        itemWidth ={ width / 5}
                    />

                    <QGMineItemView
                        iconName = {'icon_homepage_foottreatCategory'}
                        title = {'足疗按摩'}
                        itemWidth ={ width / 5}
                    />

                    <QGMineItemView
                        iconName = {'icon_homepage_foottreatCategory'}
                        title = {'足疗按摩'}
                        itemWidth ={ width / 5}
                    />

                    <QGMineItemView
                        iconName = {'icon_homepage_foottreatCategory'}
                        title = {'足疗按摩'}
                        itemWidth ={ width / 5}
                    />

                </View>
            );
        })

        return itemArr;

    }

    _renderPageView(){

        var pagesArr = [], style;
        for(let i = 0; i < 2; i++){
            style = i == this.state.currentPage ? {color : 'orange'} : {color : 'gray'}
            pagesArr.push(
                <Text style = {[{fontSize:25}, style]}>
                    &bull;
                </Text>
            )
        }

        return (
            <View style = {{flexDirection : 'row'}}>
                {pagesArr}
            </View>
        )
    }

    onMomentumScrollEnd (e){

        var offsetx = e.nativeEvent.contentOffset.x;
        var currentPage = Math.floor(offsetx / width);
        this.setState({
            currentPage : currentPage,
        })
    }
}

const styles = StyleSheet.create({

    bgStyle : {
        backgroundColor : 'green',
        width : width,
        height : 120,
        flexDirection : 'column',
    },
});