import React, { Component } from 'react'
import { Text, View,StatusBar,Button } from 'react-native'

export default class statusBar extends Component {
    state={
        hidden:false,
        barStyle:'dark-content'
    }
    render() {
        return (
            <View>
            <StatusBar
            ref={'status'}
            //  指定状态栏的变化是否应以动画形式呈现。
            animated = { true }
            // 状态栏的背景色。
            backgroundColor="rgba(0,0,0,0.5)"

            // 设置状态栏文本的颜色。enum('default', 'light-content', 'dark-content')
            barStyle={this.state.barStyle}

            // 是否隐藏状态栏。
            hidden={this.state.hidden}

            // 指定状态栏是否透明。设置为true时，应用会延伸到状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。
            // 常和带有半透明背景色的状态栏搭配使用。
            // translucent={true}
             />
            <View>
                <Button 
                title="跳转顶部"
                onPress={()=>
                    //有问题
                    // this.refs.statusBar.setBackgroundColor('red', true)
                    // this.refs.status.setBarStyle('dark-content', true)
                    //曲线修改
                    // this.setState({hidden:!this.state.hidden})
                    this.setState({barStyle:this.state.barStyle=='default'?'dark-content':'default'})

                }
                />
            </View>
            </View> 
        )
    }
}
