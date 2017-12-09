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
    ScrollView,
    ListView
} from 'react-native';

import {StackNavigator} from "react-navigation";

import {width, height} from '../Main/QGCellStyle'
import {QGCommonStyle} from '../Main/QGCellStyle'
import QGMineItemView from '../Mine/QGMineItemView'

var ds = new ListView.DataSource({
    rowHasChanged:(ri, r2) => {
        return r1 != r2;
    }
});

export default class QGTopListView extends Component<{}> {

    static defaultProps = {
        dataArr: [],
        subView1 : <Text>  控件里边的 text </Text>
    }

    render() {
        return (
            <View style={styles.bgStyle}>
                {this.props.subView1}
                {this._renderChild()}
                <ListView
                    contentContainerStyle = {styles.listViewStyle}
                    dataSource={ds.cloneWithRows(this.props.dataArr)}
                    horizontal = {true}
                    showsHorizontalScrollIndicator = {false}
                    initialListSize  number = {20}
                    renderRow ={(rowData)=>{
                        return this._renderRow(rowData);
                    }}
                />
            </View>
        )
    }

    _renderChild(){
        //// - 方案一
        //console.log(this.props.children);
        //var childViews = [];
        //this._getChildrenMap().forEach((child, idx) => {
        //    childViews.push(child);
        //});
        //return childViews;

        //// - 方案二
        //var childViews = [];
        //var childerViewMap = React.Children.map(this.props.children, (child) => {
        //    console.log(child);
        //    return child;
        //
        //});
        //childerViewMap.forEach((value, idx) => {
        //    childViews.push(value);
        //});
        //return childViews;

        // - 方案三
        ...this.props
        var childViews = [];
         var childerViewMap = React.Children.map(this.props.children, (child) => { 
             childViews.push(child);
          });
         return childViews; 
    }


    _getChildrenMap(children = this.props.children) {
        return React.Children.map(children, (child) => child);
    }

    _renderRow(rowData) {
        console.log(rowData);
        return(
            <QGMineItemView
                iconName = {rowData.image}
                title = {rowData.title}
                itemWidth ={ width / 5}
            />
        )
    }
}

const styles = StyleSheet.create({
    bgStyle : {
        width : width,
        height : 200,
        flexDirection : 'column',
    },

    listViewStyle : {
        flexDirection:'row',
        flexWrap:'wrap',
        width : width * 2,
    }
});