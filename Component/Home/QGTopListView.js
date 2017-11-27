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
    }

    render() {
        return (
            <View style={styles.bgStyle}>
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
        height : 130,
        flexDirection : 'column',
    },

    listViewStyle : {
        flexDirection:'row',
        flexWrap:'wrap',
        width : width * 2,
    }
});