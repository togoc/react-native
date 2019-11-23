import React, { Component } from 'react'
import { Text, View,CameraRoll } from 'react-native'

export default class cameraRoll extends Component {
    componentDidMount(){
        CameraRoll.getPhotos()
    }
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
//额外模块