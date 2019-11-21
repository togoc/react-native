import React,{Component} from 'react'
import {View,Text,DrawerLayoutAndroid,Dimensions,Button} from 'react-native'



export default class DrawerLayout extends Component {
    render() {
        const {width} = Dimensions.get('window')
        const navigationView = (
          <View style={{flex: 1, backgroundColor: '#fff'}}>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
          </View>
        );
        return (
          <DrawerLayoutAndroid
            ref={'DrawerAndroid'}
            drawerWidth={width*0.67}
            // 加了这个navigationView会和 navigationView里面冲突,优先选navigationView定义的
            drawerBackgroundColor="rgba(188,0,202,0.5)"
            //完成打开
            onDrawerOpen={()=>{console.log('打开了')}} 
            //完成关闭
            onDrawerClose={()=>{console.log('关闭了')}}
            // 打开/关闭 过程(会执行多次)
            onDrawerSlide={()=>console.log("正在交互......")}
            // 滑出位置
            drawerPosition={DrawerLayoutAndroid.Left}
            //指向内容
            renderNavigationView={() => navigationView}
            >
            <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
              <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
              <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>尝试往右滑动</Text>
              <Button
                title="打开按钮"
                // 无论抽屉处于那种状态，都仍然可以调用openDrawer/closeDrawer这两个方法打开和关闭(不会报错,不会触发效果onDrawerOpen/onDrawerClose)
                onPress={()=>this.refs.DrawerAndroid.openDrawer()}
                // 文本的颜色(iOS)，或是按钮的背景色(Android)
                color='blue'
                disabled={false}//设置为 true 时此按钮将不可点击。
               />
                <Button
                title="关闭按钮"
                onPress={()=>this.refs.DrawerAndroid.closeDrawer()}
                // 文本的颜色(iOS)，或是按钮的背景色(Android)
                color='red'
                disabled={false}//设置为 true 时此按钮将不可点击。
               />
            </View>
          </DrawerLayoutAndroid>
        );
      }
}


