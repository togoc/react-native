import React, { Component } from 'react'
import { Text, View ,DatePickerAndroid,Button} from 'react-native'

export default class datePickerAndroid extends Component {
    async getTime() {
    //获取
    try {
        const {action, year, month, day} = await DatePickerAndroid.open({
            // 要设置默认值为今天的话，使用`new Date()`即可。
            // 下面显示的会是2020年5月25日。月份是从0开始算的。
            date: new Date(2020, 4, 25)
        });
        if (action !== DatePickerAndroid.dismissedAction) {
            // 这里开始可以处理用户选好的年月日三个参数：year, month (0-11), day
        }
        } catch ({code, message}) {
        console.warn('Cannot open date picker', message);
        }
    }
    
    _showDate(){
        console.log(DatePickerAndroid.dateSetAction())
    }
    componentDidMount(){
        this.getTime()
    }
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
                <Button
                title="显示选择的日期"
                onPress={()=>{
                  this._showDate()
                }}
                />
            </View>
        )
    }
}
//废弃内容