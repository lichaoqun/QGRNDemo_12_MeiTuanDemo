/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import QGLaunchImage from './Component/Main/QGLaunchImage'

export default class App extends Component<{}> {
  render() {
    return (
        //// - 一直显示启动图的操作
        <QGLaunchImage/>

    );
  }
}
