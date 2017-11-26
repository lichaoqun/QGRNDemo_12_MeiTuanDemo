/**
 * Created by QG on 2017/11/23.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import QGMain from './QGMain';

export default class QGLaunchImage extends Component<{}> {

    state  = {
        showMainView : false,
    }

    render() {
        if(this.state.showMainView){
            return(
                <QGMain/>
            );
        }else {
            return (
                <Image
                    source = {{uri : 'LaunchImage'}}
                    style = {{flex : 1}}
                />
            );
        }
    }

    componentDidMount(){

        var self = this;
        setTimeout(()=>{
            self.setState({
                showMainView : true,
            })
        }, 0);
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
