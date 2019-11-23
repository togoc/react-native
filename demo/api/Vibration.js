import React, { Component } from 'react'
import { Text, View,Vibration } from 'react-native'

export default class vibration extends Component {
    componentDidMount(){
        // Android: vibrate for 10s
        const DURATION = 10000
        // Android: wait 1s -> vibrate 2s -> wait 3s
        const PATTERN = [1000, 1000, 3000,1000]
        Vibration.vibrate(PATTERN)

        // 停止震动。
        // Vibration.cancel()
    }
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
