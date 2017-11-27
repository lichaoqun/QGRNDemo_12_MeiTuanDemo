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

    static defaultProps = {
        dataArr : [[],[]],
    }

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

                <View style={{flexDirection : 'row', justifyContent : 'center', width : width,}}>
                    {this._renderPageView()}
                </View>
            </View>
        )
    }

    _renderScrollView(){
        var itemViewArr = [];
        var colorArr = ['orange', 'blue'];
        colorArr.forEach((value, index)=>{

            var itemsArr = this.props.dataArr[index];
            itemViewArr.push(
                <View style = {{backgroundColor : 'white', width : width, flex : 1, flexDirection : 'row', flexWrap : 'wrap'}}>
                    {this._renderItem(itemsArr)}
                </View>
            );
        })
        return itemViewArr;
    }

    _renderItem(itemsArr){

        var itemViewArr = [];
        itemsArr.forEach((value, index)=>{
            itemViewArr.push(
                <QGMineItemView
                    iconName = {value.image}
                    title = {value.title}
                    itemWidth ={ width / 5}
                />
            );
        })
        return itemViewArr;
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
        width : width,
        height : 150,
        flexDirection : 'column',
    },
});