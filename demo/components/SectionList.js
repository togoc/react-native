import React, { Component } from 'react'
import { Text, View,SectionList,Button } from 'react-native'

export default class sectionList extends Component {
    state={
        refreshing:false
    }
    _onRefresh = () => {
        this.setState({refreshing: true});
      //   fetchData().then(() => {
      //     this.setState({refreshing: false});
      //   });
      setTimeout(()=>{
          this.setState({refreshing: false});
          alert('刷新了')
      },1000)
      }
    render() {
            const overrideRenderItem = ({ item, index, section: { title, data } }) => <Text key={index}>Override{item}</Text>
            return (
                // Example 1 (Homogeneous Rendering)
            <View> 
                <Button 
                title="跳转顶部"
                onPress={()=>{
                    console.log(1)
                    this.refs.sectionList.scrollToLocation({itemIndex:10})
                }}
                />
                <SectionList
                ref='sectionList'
                // 用来渲染每一个section中的每一个列表项的默认渲染器。
                // 可以在section级别上进行覆盖重写。必须返回一个react组件。
                renderItem={({ item, index, section }) => <Text key={index}>{item}</Text>}
                // 在每个section的头部渲染。
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={{ fontWeight: "bold" }}>{title}</Text>
                )}
                // 用来渲染的数据,类似于FlatList中的data属性。
                sections={[
                    { title: "Title1", data: ["item1", "item2"] },
                    { title: "Title2", data: ["item3", "item4"] },
                    { title: "Title2", data: ["item3", "item4"] },
                    { title: "Title2", data: ["item3", "item4"] },
                    { title: "Title2", data: ["item3", "item4"] },
                    { title: "Title2", data: ["item3", "item4"] },
                    { title: "Title2", data: ["item3", "item4"] },
                    { title: "Title2", data: ["item3", "item4"] },
                    { title: "Title2", data: ["item3", "item4"] },
                    { title: "Title3", data: ["item5", "item6"] }
                ]}
                // 指定一开始渲染的元素数量,最好刚刚够填满一个屏幕,这样保证了用最短的时间给用户呈现可见的内容(包含title和item个数)。
                initialNumToRender={3}

                // 此函数用于为给定的item生成一个不重复的key。
                keyExtractor={(item, index) => item + index}

                // 当列表被滚动到距离内容最底部不足onEndReachedThreshold的距离时调用onEndReached。
                onEndReachedThreshold ={.5}
                onEndReached={()=>{
                    // alert('1')
                }}

                // 行与行之间的分隔线组件。不会出现在第一行之前和最后一行之后。
                ItemSeparatorComponent={()=><Text style={{color:'#c00'}}>行与行分隔组件</Text>}

                // 头部组件。
                ListHeaderComponent={()=><Text>头部组件</Text>}
                // 尾部组件。
                ListFooterComponent={()=><Text>尾部组件</Text>}
                // 每个组的尾部组件。
                renderSectionFooter={()=><Text style={{color:'#cc0'}}>每个section的尾部组件</Text>}
                // 在每个section的顶部和底部渲染(区别于ItemSeparatorComponent,它仅在列表项之间渲染)。
                SectionSeparatorComponent={()=><Text style={{color:'#c00'}}>-----</Text>}

                // 当列表数据为空时渲染的组件。
                ListEmptyComponent={()=><Text>数据为空时渲染组件</Text>}

                // 如果设置了此选项,则会在列表头部添加一个标准的RefreshControl控件,以便实现“下拉刷新”的功能。
                //下拉刷新的执行的内容
                onRefresh={()=>this._onRefresh()}

                // 在等待加载新数据时将此属性设为true,列表就会显示出一个正在加载的符号。
                refreshing={this.state.refreshing}

                // 如果你想把刷新控件往下移动一些
                progressViewOffset={0}
                
                // 当下一个section把它的前一个section的可视区推离屏幕的时候,让这个section的header粘连在屏幕的顶端。
                stickySectionHeadersEnabled

                // 是一个可选的优化，用于避免动态测量内容尺寸的开销，不过前提是你可以提前知道内容的高度。
                // 注意如果你指定了ItemSeparatorComponent,请把分隔线的尺寸也考虑到 offset 的计算之中。
                //如果用到跳转方法 请加入这个关于每一项的高度
                // getItemLayout={(data, index) => (
                //         {length: data.length, offset: 125 * index, index}
                //       )}
                />
            </View> 
                // Example 2 (Heterogeneous Rendering / No Section Headers)
            // <SectionList
            // keyExtractor={(item, index) => item + index}
            // renderItem={({ item, index, section }) => <Text key={index}>{item}</Text>}
            // sections={[
            //     { title: 'Title1', data: ['item1', 'item2'], renderItem: overrideRenderItem },
            //     { title: 'Title2', data: ['item3', 'item4'] },
            //     { title: 'Title3', data: ['item5', 'item6'] },
            // ]}
            // />
        )
    }
}
// https://reactnative.cn/docs/sectionlist/
