import React, { Component } from 'react'
import { Text, View,ScrollView } from 'react-native'

export default class scrollView extends Component {
    render() {
        return (
           <ScrollView 
            style={{flex:1,backgroundColor:'gray'}}
            //    contentContainerStyle
            //         这些样式会应用到一个内层的内容容器上,所有的子视图都会包裹在内容容器内。示例：
            contentContainerStyle={{paddingVertical:20}}
            
            //    keyboardDismissMode 用户拖拽滚动视图的时候,是否要隐藏软键盘。
            //    跨平台可用的值
            //    'none' （默认值）,拖拽时不隐藏软键盘。
            //    'on-drag',当拖拽开始的时候隐藏软键盘。

            // onMomentumScrollBegin 滚动动画开始时调用此函数。
            // onMomentumScrollEnd 滚动动画结束时调用此函数。
            // onScroll 在滚动的过程中,每帧最多调用一次此回调函数。调用的频率可以用scrollEventThrottle属性来控制。
            // onScrollEndDrag  当用户停止拖动此视图时调用此函数。
            // refreshControl 指定RefreshControl组件,用于为ScrollView提供下拉刷新功能。只能用于垂直视图,即horizontal不能为true。
              >
                <Text style={{height:100,backgroundColor:'red'}}>11</Text>
                <Text style={{height:100,backgroundColor:'red'}}>22</Text>
                <Text style={{height:100,backgroundColor:'red'}}>33</Text>
                <Text style={{height:100,backgroundColor:'red'}}>44</Text>
                <Text style={{height:100,backgroundColor:'red'}}>55</Text>
                <Text style={{height:100,backgroundColor:'red'}}>66</Text>
                <Text style={{height:100,backgroundColor:'red'}}>77</Text>
                <Text style={{height:100,backgroundColor:'red'}}>88</Text>
                <Text style={{height:100,backgroundColor:'red'}}>11</Text>
                <Text style={{height:100,backgroundColor:'red'}}>11</Text>
                <Text style={{height:100,backgroundColor:'red'}}>11</Text>
                <Text style={{height:100,backgroundColor:'red'}}>11</Text>
                <Text style={{height:100,backgroundColor:'red'}}>00</Text>
           </ScrollView>
        )
    }
}
// https://reactnative.cn/docs/scrollview/