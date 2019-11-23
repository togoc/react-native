import React, { Component } from 'react'
import { Text, View,Alert ,Button} from 'react-native'

export default class alert extends Component {
    render() {
        return (
            <View>
                <Button
                title="Alert"
                onPress={()=>{
                    Alert.alert(
                        'Alert Title',
                        'My Alert Msg',
                        [
                          {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                          {text: 'OK', onPress: () => console.log('OK Pressed')},
                        ],
                        { cancelable: false }
                        )
                }}
                />
            </View>
        )
    }
}
