import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class BlueIsCool extends Component {
  render() {
    return (
    //   <Text>
    //     There is a blue square
    //     <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
    //     in between my text.
    //   </Text>

        // <View>
        //     <Text>First part and </Text>
        //     <Text>second part</Text>
        // </View>

        <Text
        // 决定用户是否可以长按选择文本，以便复制和粘贴。
        selectable

        // 用来当文本过长的时候裁剪文本。包括折叠产生的换行在内，总的行数不会超过这个属性的限制。
        // 此属性一般和ellipsizeMode搭配使用。
        numberOfLines={1}

        // 当文本被长按以后调用此回调函数。
        onLongPress={()=>{
            alert("你长按了")
        }}

        // 当文本被点击以后调用此回调函数。
        // onPress

        dataDetectorType={'link'}
        >
            <Text>First part and </Text>
            <Text>second part11111111111111111111111</Text>
        </Text>
    );
  }
}


// https://reactnative.cn/docs/text/