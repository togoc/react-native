import React, { Component } from 'react'
import { Text, View,BackHandler,Alert } from 'react-native'

export default class backHandler extends Component {
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
      }
      componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
      }
      handleBackPress = () => {
          let flat=false
        Alert.alert(
            '',
            '是否确定退出?',
            [
              {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: '确定', onPress: () => {
                BackHandler.exitApp()
                }},
            ],
            { cancelable: false }
            );
            if(flat){
                console.log("1")
                return false
            }
        // BackHandler.exitApp(); // works best when the goBack is async
        return true;
      }
      
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
