import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class view extends Component {
    render() {
        return (
            <View
            // 设置这个视图是否要响应 touch start 事件
            // onStartShouldSetResponder={()=>{
            //     alert("1")
            // }}

            onResponderMove={()=>alert("1")}

            // accessible={true}
            // onMagicTap={()=>alert("!!")}
            style={{
            flexDirection: "row",
            height: 100,
            backgroundColor:'red',
            padding: 20
            }}
            >
                {/* <View style={{ backgroundColor: "blue", flex: 0.3 }} />
                <View style={{ backgroundColor: "red", flex: 0.5 }} />
                <Text>Hello World!</Text> */}
            </View>
        )
    }
}
