import React, { Component } from 'react'
import { Text, View,KeyboardAvoidingView,TextInput,Dimensions  } from 'react-native'

export default class keyboardAvoidingView extends Component {
    state={
        Text:"内容输出"
    }
    render() {
        const {width,height} = Dimensions.get('window')
        return (
            <KeyboardAvoidingView style={{display:'flex',justifyContent:'center',width,height}} behavior="padding" enabled>
                    <TextInput
                        style={{flex:1}}
                        placeholder="请输入内容"
                        onChangeText={(Text)=>{
                            if((Text.replace(/^\s*|\s*$/g,""))==''){
                                this.setState({Text:"内容输出"})
                            }else{
                                this.setState({Text})
                            }
                        }}          
                    />
                    <Text style={{flex:1,backgroundColor:'gray',fontSize:25}}>{this.state.Text}</Text>
                    <Text style={{flex:1}}>吃瓜内容</Text>
            </KeyboardAvoidingView> 
        )
    }
}
// 本组件用于解决一个常见的尴尬问题：手机上弹出的键盘常常会挡住当前的视图。
// 本组件可以自动根据键盘的位置,调整自身的 height 或底部的 padding,以避免被遮挡。