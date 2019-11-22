import React, { Component } from 'react'
import { Text,Button, View,FlatList,RefreshControl,ScrollView} from 'react-native'

export default class FlatListScreen extends Component {
    state={
        data:[
            {key:'a'},
            {key:'b'},
            {key:'c'},
            {key:'d'},
            {key:'d'},
            {key:'d'},
            {key:'d'},
        ],
        refreshing: false,
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
        return (
            <View style={{marginBottom:120}}>
                <Button
                    title="滚动到顶部"
                    onPress={()=>{
                        this.refs.FlatListDemo.scrollToIndex({index:0});
                    }}
                />
                <Button
                    title="滚动到底部"
                    onPress={()=>{
                        //他是根据getItemLayout的offset来移动的,要计算好高度
                        this.refs.FlatListDemo.scrollToIndex({index:6});
                    }}
                />
                <Button
                    title="短暂地显示滚动指示器 IOS"
                    onPress={()=>{
                        this.refs.FlatListDemo.flashScrollIndicators();
                    }}
                />
               <FlatList
                    ref={'FlatListDemo'}
                    //设置为 true 则变为水平布局模式。
                    horizontal={false}
                    //行与行之间的分隔线组件。不会出现在第一行之前和最后一行之后。
                    ItemSeparatorComponent={()=><Text style={{height:25}}>分割线</Text>}
                    //为了简化起见，data 属性目前只支持普通数组。
                    data={this.state.data}
                    // 如果有除data以外的数据用在列表中（不论是用在renderItem还是头部或者尾部组件中），请在此属性中指定。
                    // extraData
                    //列表为空时渲染该组件。可以是 React Component, 也可以是一个 render 函数，或者渲染好的 element。
                    ListEmptyComponent={()=><Text>没有数据哦</Text>}
                  
                    //头部组件。可以是 React Component, 也可以是一个 render 函数，或者渲染好的 element。
                    //头部修改成加载
                    ListHeaderComponent={()=><Text>头部组件</Text>
                          // <RefreshControl
                            // refreshing={this.state.refreshing}
                            // onRefresh={this._onRefresh}
                          // />
                    }
                    // 尾部组件。可以是 React Component, 也可以是一个 render 函数，或者渲染好的 element。
                    ListFooterComponent={()=><Text style={{height:25}}>尾部组件</Text>}
                    //多列布局只能在非水平模式下使用，即必须是horizontal={false}。
                    // numColumns={2}
                    //如果设置了多列布局（即将numColumns值设为大于 1 的整数），则可以额外指定此样式作用在每行容器上。
                    // columnWrapperStyle={{borderWidth: 2, borderColor: 'black'}}

                    // 是一个可选的优化，用于避免动态测量内容尺寸的开销，不过前提是你可以提前知道内容的高度。
                    // 注意如果你指定了ItemSeparatorComponent,请把分隔线的尺寸也考虑到 offset 的计算之中。
                    getItemLayout={(data, index) => (
                        {length: data.length, offset: 125 * index, index}
                      )}
                    //指定一开始渲染的元素数量，最好刚刚够填满一个屏幕，这样保证了用最短的时间给用户呈现可见的内容。
                    // initialNumToRender={2}
                   
                    // 此函数用于为给定的 item 生成一个不重复的 key,若不指定此函数,则默认抽取item.key作为 key 值。
                    // 若item.key也不存在，则使用数组下标。
                    keyExtractor={(item,index)=>item+index}

                    // 决定当距离内容最底部还有多远时触发onEndReached回调。注意此参数是一个比值而非像素单位。
                    // 比如,0.5 表示距离内容最底部的距离为当前列表可见长度的一半时触发。
                    onEndReachedThreshold={.5}

                    // 当列表被滚动到距离内容最底部不足onEndReachedThreshold的距离时调用。
                    // 只会执行一次?
                    onEndReached={()=>{
                        // console.log('到底了')
                        alert('到底了')
                    }}

                    //下拉刷新后执行的内容
                    //也可以在RefreshControl中设定
                    onRefresh={this._onRefresh}
                    //Boolean,
                    refreshing={this.state.refreshing}

                    // 当需要在指定的偏移处显示加载指示器的时候，就可以设置这个值。
                    // progressViewOffset={Number}




                    renderItem={({item,index,separators}) =>(
                     <Text style={{backgroundColor:'red',height:100}}>{'item: '+item.key+'   index: '+index}</Text>)
                    }
                />
            </View>
        )
    }
}

 class RefreshableList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        refreshing: false,
      };
    }
  
    _onRefresh = () => {
      this.setState({refreshing: true});
    //   fetchData().then(() => {
    //     this.setState({refreshing: false});
    //   });
    setTimeout(()=>{
        this.setState({refreshing: false});
    },1000)
    }
  
    render() {
      return (
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        />
      );
    }
  }