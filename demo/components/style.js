import React,{Component} from 'react'
import {View,Text,StyleSheet,Dimensions} from 'react-native'


export default class Style extends Component{
    render() {
        return (
            <View style={[style.container,{backgroundColor:'red'}]}>
                <Text>11</Text>
            </View>
        )
    }
}

const style= StyleSheet.create({
    container:{
        display:'flex',
        flex:1
    }
})