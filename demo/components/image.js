import React, { Component } from 'react';
import { View, Image,ImageBackground,Text } from 'react-native';


//Image
 class DisplayAnImage extends Component {
  render() {
    return (
      <View>
         <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
        />
         <Image
          style={{width: 66, height: 58}}
          source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
        />
        <Image
          style={{width: 50, height: 50}}
          source={require('./sb.gif')}
          defaultSource={require('./logo.png')}
          // blurRadius(模糊半径)：为图片添加一个指定半径的模糊滤镜。
          blurRadius={1}
          // onLoad={()}//加载成功完成时调用此回调函数
          //onLoadEnd加载结束后，不论成功还是失败，调用此回调函数。
          //onLoadStart加载开始时调用。示例：onLoadStart={(e) => this.setState({loading: true})}
        />
      </View>
    );
  }
}
//https://reactnative.cn/docs/image/

//ImageBackground
export default class image extends Component {
  render() {
    return (
      <ImageBackground source={require('./logo.png')} style={{width: '100%', height: '100%'}}>
        <Text>Inside</Text>
      </ImageBackground>
    );
  }
}
