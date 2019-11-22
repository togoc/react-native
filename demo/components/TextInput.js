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
                // 如果为true，在componentDidMount后会获得焦点。默认值为false。
                // autoFocus

                // 如果为true，则隐藏光标。默认值为false。
                // caretHidden

                //IOS  是否要在文本框右侧显示“清除”按钮。仅在单行模式下可用。默认值为never 。
                clearButtonMode='while-editing'

                //IOS 如果为true，每次开始输入的时候都会清除文本框的内容。
                clearTextOnFocus={true}

                // 提供一个文本框中的初始值。
                // defaultValue="123"
                
                // 如果为false，文本框是不可编辑的。默认值为true。
                // editable

                // 决定弹出何种软键盘类型，譬如numeric（纯数字键盘）。
                keyboardType={'default'}

                // 限制文本框中最多的字符数。使用这个属性而不用JS逻辑去实现，可以避免闪烁的现象。
                // maxLength={5}

                // 如果为true，文本框中可以输入多行文字。默认值为false。
                // multiline={true}
                // 设置输入框的行数。当multiline设置为true时使用它，可以占据对应的行数。
                // numberOfLines

                // 当文本框内容变化时调用此回调函数(每输入一个字符都会调用)。
                // onChange={()=>{
                //     alert('11')
                // }}

                // 当文本框失去焦点的时候调用此回调函数。
                // onBlur

                // 当文本输入结束后调用此回调函数。
                // onEndEditing

                // 当文本框获得焦点的时候调用此回调函数。回调参数为{ nativeEvent: { target } }。
                // onFocus={(e)=>{
                //     console.log(e)
                // }}

                // 当一个键被按下的时候调用此回调。传递给回调函数的参数为{ nativeEvent: { key: keyValue } }
                // onKeyPress

                // 当组件加载或者布局变化的时候调用，
                // 回调参数为{ nativeEvent: {layout: {x, y, width, height}, target } }。
                // onLayout

                // 如果没有任何文字输入，会显示此字符串。
                placeholder="请输入内容"
                // 占位字符串显示的文字颜色。
                // placeholderTextColor

                //当文本框内容变化时调用此回调函数。改变后的文字内容会作为参数传递。
                onChangeText={(val)=>
                    // alert(val)
                    this.setState({text:val})
                }
                //文本被提交后（用户按下软键盘上的提交键/回车键）调用,如果multiline={true}，此属性不可用。
                // onSubmitEditing={(val)=>{
                //     alert(val)
                // }}

                //修改不了啊
                // returnKeyType='send'
                // returnKeyLabel="发送"

                // 如果为true，当获得焦点的时候，所有的文字都会被选中。
                selectTextOnFocus={true}
                // 文字被选中背景色
                // selectionColor='red'

                // value 文本框中的文字内容。

                // 方法 
                //  clear();清空输入框的内容。
                //  isFocused() 返回值表明当前输入框是否获得了焦点。

                />
               <Text>{this.state.text}</Text>
               <TextInput
                returnKeyLabel={"123"}
               
               />
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

// https://reactnative.cn/docs/textinput/