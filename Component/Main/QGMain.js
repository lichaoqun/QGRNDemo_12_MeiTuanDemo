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
import {StackNavigator} from "react-navigation";

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
                    <HomeNAV/>
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
                    <ShopNAV/>

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
                   <MineNAV/>

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
                   <MoreNAV/>

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


/*
*   设置路由
* */
//首页
const HomeNAV = StackNavigator({
    Home: {
        //对应界面MyHomeScreen
        screen: QGHome,
    },
});

//商家
const ShopNAV = StackNavigator({
    Home: {
        //对应界面MyHomeScreen
        screen: QGShop,
    },
});

//我的
const MineNAV = StackNavigator({
    Home: {
        //对应界面MyHomeScreen
        screen: QGMine,
    },
});

//更多
const MoreNAV = StackNavigator({
    Home: {
        //对应界面MyHomeScreen
        screen: QGMore,
    },
});