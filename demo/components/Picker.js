import React, { Component } from 'react'
import { Text, View,Picker } from 'react-native'

export default class picker extends Component {
    state={
        language:"Java"
    }
    render() {
        return (
           <View>
                <Picker
                // 默认选中的值。可以是字符串或整数。
                selectedValue={this.state.language}

                style={{height: 50, width: 200}}

                // enabled 如果设为 false，则会禁用此选择器。

                // mode 在 Android 上，可以指定在用户点击选择器时，以怎样的形式呈现选项：
                //     'dialog': 显示一个模态对话框。默认选项。
                //     'dropdown': 以选择器所在位置为锚点展开一个下拉框。
                // mode={('dropdown')}

                // prompt 设置选择器的提示字符串。在 Android 的对话框模式中用作对话框的标题。
                //mode={('dialog')} 生效
                prompt="请选择最可爱的语言"


                // itemStyle 指定应用在每项标签上的样式 IOS。//


                // 某一项被选中时执行此回调。调用时带有如下参数：
                //     itemValue: 被选中项的value属性
                //     itemPosition: 被选中项在 picker 中的索引位置
                onValueChange={(itemValue, itemIndex) =>
                         this.setState({language: itemValue})
                }>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="JavaScript" />
                </Picker>
                <Text>{this.state.language}</Text>
           </View>
        )
    }
}
