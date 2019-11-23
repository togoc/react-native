import React, { Component } from 'react'
import { Text, View,ToastAndroid  } from 'react-native'

export default class toastAndroid extends Component {
    componentDidMount(){
        ToastAndroid.show("A pikachu appeared nearby !", ToastAndroid.SHORT);
        // ToastAndroid.showWithGravity(
        // "All Your Base Are Belong To Us",
        // ToastAndroid.SHORT,
        // ToastAndroid.CENTER
        // );
        // ToastAndroid.showWithGravityAndOffset(
        // "A wild toast appeared!",
        // ToastAndroid.LONG,
        // ToastAndroid.BOTTOM,
        // 25,
        // 50
        // );
    }
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}