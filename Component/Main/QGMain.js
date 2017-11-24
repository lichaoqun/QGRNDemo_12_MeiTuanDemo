/**
 * Created by QG on 2017/11/23.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Platform, // 判断系统版本
    //Navigator,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Navigator from 'react-native-deprecated-custom-components';

import QGHome from '../Home/QGHome';
import QGMine from '../Mine/QGMine';
import QGMore from '../More/QGMore';
import QGShop from '../Shop/QGShop';

export default class QGMain extends Component<{}> {

    state = {
        selectedTab : 'home',

    }

    render() {
        return (
            <TabNavigator>

                {/*首页*/}
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title='首页'
                    renderIcon={() => <Image source={{uri : 'icon_tabbar_homepage'}} style = {styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={{uri : 'icon_tabbar_homepage_selected'}} style = {styles.iconStyle}  />}
                    selectedTitleStyle = {{color : 'orange'}}
                    onPress={() => {
                        this.setState({ selectedTab: 'home' })
                    }}
                    selectedTitleStyle = {{color : 'orange'}}
                >
                    <Navigator
                        initialRoute = {{name : '首页', component : QGHome}}
                        configureScene = {()=>{
                            return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene = {(route, navigator)=>{
                            let Component = route.component;
                            return <Component {...route.passProps} navigator = {navigator} />
                        }}
                    />
                </TabNavigator.Item>

                {/*商家*/}
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'shop'}
                    title="商家"
                    renderIcon={() => <Image source = {{uri : 'icon_tabbar_merchant_normal'}} style = {styles.iconStyle}  />}
                    renderSelectedIcon={() => <Image source = {{uri : 'icon_tabbar_merchant_selected'}} style = {styles.iconStyle}  />}
                    selectedTitleStyle = {{color : 'orange'}}
                    onPress={() => {
                        this.setState({ selectedTab: 'shop' })
                    }}
                >
                    <QGShop/>

                </TabNavigator.Item>

                {/*我的*/}
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'mine'}
                    title="我的"
                    renderIcon={() => <Image source={{uri : 'icon_tabbar_mine'}} style = {styles.iconStyle}  />}
                    renderSelectedIcon={() => <Image source={{uri : 'icon_tabbar_mine_selected'}} style = {styles.iconStyle}  />}
                    selectedTitleStyle = {{color : 'orange'}}
                    badgeText="1"
                    onPress={() => {
                        this.setState({ selectedTab: 'mine' })
                    }}
                >
                    <QGMine/>

                </TabNavigator.Item>

                {/*更多*/}
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'more'}
                    title="更多"
                    renderIcon={() => <Image source={{uri : 'icon_tabbar_misc'}} style = {styles.iconStyle}  />}
                    renderSelectedIcon={() => <Image source={{uri : 'icon_tabbar_misc_selected'}} style = {styles.iconStyle}  />}
                    selectedTitleStyle = {{color : 'orange'}}
                    onPress={() => {
                        this.setState({ selectedTab: 'more' })
                    }}
                >
                    <QGMore/>

                </TabNavigator.Item>

            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    iconStyle: {
        width : Platform.OS === 'ios' ? 30 : 25,
        height : Platform.OS === 'ios' ? 30 : 25
    },
});