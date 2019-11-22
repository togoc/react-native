import React, { Component } from 'react'
import { Text, View,Switch } from 'react-native'

export default class witch extends Component {
    state={
        value:false
    }
    render() {
        return (
            <View>
                <Switch 
                style={{left:0,backgroundColor:'red'}}
                // 如果为true则禁用此组件的交互
                // disabled

                // 开启/关闭 状态时的背景颜色val。
                trackColor={{false:'gray',true:'blue'}}

                // 开关上圆形按钮的背景颜色。在iOS上设置此颜色会丢失按钮的投影。
                thumbColor='yellow'

                value={this.state.value}
                onValueChange={(val)=>this.setState({value:!this.state.value})}
                />
            </View>
        )
    }
}
