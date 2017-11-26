/**
 * Created by QG on 2017/11/25.
 */
import {
    StyleSheet
} from 'react-native';
import Dimensions from  'Dimensions';

export var {width, height} = Dimensions.get('window');


export const QGCommonStyle = StyleSheet.create({
    textStyle :{
        color : '#cccccc',
    },

    titleStyle : {
        color : '#777777',
        marginLeft : 10,
    },

    bgViewStyle  : {
        height : 44,
        flexDirection : 'row',
        alignItems : 'center',
        position : 'absolute',
        right : 15,
    },

    bgContentViewStyle  : {
        backgroundColor : 'white',
        width : width,
        height : 44,
        flexDirection : 'row',
        alignItems : 'center',
        borderBottomWidth : 1,
        borderBottomColor : '#eeeeee'
    },

    normalIconStyle :{
        width : 8,
        height : 13,
        position : 'absolute',
        right : 15,
    },

    normalWithTextIconStyle :{
        width : 8,
        height : 13,
        marginLeft : 5,
    }

})