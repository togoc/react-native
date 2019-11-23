import React, { Component } from 'react'
import { Text, View ,AsyncStorage} from 'react-native'

export default class asyncStorage extends Component {
    async storeData(){
        try {
            await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
          } catch (error) {
            // Error saving data
          }
    }
    async getData(){
        try {
            const value = await AsyncStorage.getItem('@MySuperStore:key');
            if (value !== null) {
              // We have data!!
              console.log(value);
            }
           } catch (error) {
             // Error retrieving data
           }
    }
    componentDidMount(){
        let value =  this.getData()
        console.log(value)
    }
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
//即将废除的组件api