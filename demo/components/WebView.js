import React, { Component } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { WebView } from 'react-native-webview';

// ...
export default class MyWebComponent extends Component {
  constructor( props ) {
    super( props );
    this.webView = null;
}
    onMessage( event ) {
      console.log( "On Message", event.nativeEvent.data );
  }

  sendPostMessage() {
      console.log( "Sending post message,this is RN" );
      this.webView.postMessage( "Post message from react native " );
  }
  render() {
    const INJECTED_JAVASCRIPT = `(function() {
      var h1 = document.createElement('p');
      h1.innerHTML="Hello World!--这是插入的内容";
      document.body.append(h1);
      window.ReactNativeWebView.postMessage(JSON.stringify(window.location));
  })();`;
    return (
     <View style={{flex:1,display:'flex'}}>
       <Button
       title="刷新"
       onPress={()=>{
        // 刷新当前页面。
        this.refs.webview.reload()
        // 根据webview的历史访问记录往前一个页面
        // goForward();

        // 根据webview的历史访问记录往后一个页面。
        // goBack();

        // 停止载入当前页面。
        // stopLoading();
       }}
       />
        <Button
       title="发送数据"
       onPress={()=>{
        this.sendPostMessage()
       }}
       />
        <WebView
      ref={( webView ) => this.webView = webView}
      // ref='webview'

      style={{flex:1}}

      //注意如果是载入html代码，则需要设置originWhitelist，比如可以设为["*"]来允许运行本地代码。
      originWhitelist={['*']}

      // 加载网页(加载本地记得重启服务)
      // source={{uri:'https://www.baidu.com'} }
      //本地 需要吧文件放在demo/android/app/src/main/assets目录下,获取格式如下'file:///android_asset/'+文件名
      //每次修改html都要重启服务
      source={{uri: 'file:///android_asset/pages/demo.html'}}
      
      // 设置 js 字符串，在网页加载之前注入的一段 JS 代码。
      injectedJavaScript={INJECTED_JAVASCRIPT}
      javaScriptEnabledAndroid={true}


      // 当 WebView加载失败时调用的函数
      // onError

      // 当 WebView加载成功后执行的函数
      // onLoad

      // 函数，当加载结束调用，不管是成功还是失败。
      // onLoadEnd

      // 当 WebView刚开始加载时调用的函数
      // onLoadStart

        //以下可以说是页面传信息过来会触发(交互数据)
        onMessage={this.onMessage}
      // mixedContentMode='always'
        />
     </View>
    );
  }
}
// https://github.com/react-native-community/react-native-webview/blob/master/docs/Reference.md