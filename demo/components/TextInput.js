import React,{Component} from 'react'
import {View,Text,StyleSheet,Dimensions,TextInput,Button} from 'react-native'


export default class Style extends Component{
    state={
        text:"文本内容"
    }
    render() {
        //获取屏幕宽高
        const {width,height}=Dimensions.get('window')
        return (
            <View style={[style.container,{width,height}]}>
                <TextInput
                    placeholder="请输入内容"
                    //文本变化时被调用
                    onChangeText={(val)=>
                        // alert(val)
                        this.setState({text:val})
                    }
                    //文本被提交后（用户按下软键盘上的提交键）调用
                    onSubmitEditing={(val)=>{
                        alert(val)
                    }}
                />
               <Text>{this.state.text}</Text>
               <Button
                title="按钮"
                onPress={()=>alert("这是一个不能修改样式的按钮")}
                // 文本的颜色(iOS)，或是按钮的背景色(Android)
                color='red'
                disabled={false}//设置为 true 时此按钮将不可点击。
               />
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