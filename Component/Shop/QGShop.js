/**
 * Created by QG on 2017/11/23.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {StackNavigator} from "react-navigation";

export default class QGShop extends Component<{}> {

    static navigationOptions = {
        title: '商家',    //设置navigator的title
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>shop</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});