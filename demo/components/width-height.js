import React,{Component} from 'react'
import {View,Text,StyleSheet,Dimensions} from 'react-native'


export default class Style extends Component{
    render() {
        //获取屏幕宽高
        const {width,height}=Dimensions.get('window')
        return (
            <View style={[style.container,{backgroundColor:'red',width,height}]}>
                <Text>11</Text>
            </View>
        )
    }
}

const style= StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
    }
})