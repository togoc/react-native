import React, { Component } from 'react'
import { Text, View,FlatList} from 'react-native'

export default class FlatListScreen extends Component {
    render() {
        return (
            <View>
               <FlatList
                    //设置为 true 则变为水平布局模式。
                    horizontal={false}
                    //行与行之间的分隔线组件。不会出现在第一行之前和最后一行之后。
                    ItemSeparatorComponent={()=><Text>分割线</Text>}
                    //为了简化起见，data 属性目前只支持普通数组。
                    data={[
                        {key: 'a'},
                        {key: 'a'},
                        {key: 'a'},
                        {key: 'a'},
                        {key: 'a'},
                        {key: 'b'}
                        ]}
                    //列表为空时渲染该组件。可以是 React Component, 也可以是一个 render 函数，或者渲染好的 element。
                    ListEmptyComponent={()=><Text>没有数据哦</Text>}
                    //头部组件。可以是 React Component, 也可以是一个 render 函数，或者渲染好的 element。
                    ListHeaderComponent={()=><Text>头部组件</Text>}
                    // 尾部组件。可以是 React Component, 也可以是一个 render 函数，或者渲染好的 element。
                    ListFooterComponent={()=><Text>尾部组件</Text>}
                    //多列布局只能在非水平模式下使用，即必须是horizontal={false}。
                    // numColumns={2}
                    //如果设置了多列布局（即将numColumns值设为大于 1 的整数），则可以额外指定此样式作用在每行容器上。
                    // columnWrapperStyle={{borderWidth: 2, borderColor: 'black'}}
                    renderItem={({item,index,separators}) =>(
                     <Text>{'item: '+item.key+'   index: '+index}</Text>)
                    }
                />
            </View>
        )
    }
}
