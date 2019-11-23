import React, { Component } from 'react'
import { Text, View,Clipboard,Button } from 'react-native'

export default class clipboard extends Component {
    state={
        selectable:''
    }
    async _getContent() {
        //获取
        const content = await Clipboard.getString();
        console.log(this.setState({selectable:content}))
      }
    componentDidMount(){
        this._getContent()
    }
    render() {
        return (
            <View>
                 <Button
                title="复制内容: 'ABC'"
                onPress={()=>{
                    Clipboard.setString("ABC");
                }}
                />
                <Text
                  selectable
                > 获取的值: {this.state.selectable} </Text>
            </View>
        )
    }
}
