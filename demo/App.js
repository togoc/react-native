import React from 'react';
import { Button,View, Text ,TextInput} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MD5 from './md5'

class Home extends  React.Component {
    static navigationOptions = {
        title: 'Translate',
      };
    state={
        text:""
    };
    render() {

        return (
            <View>
                <TextInput 
                placeholder="请输入内容进行翻译"
                onChangeText={(text)=>{
                    this.setState({text:text})
                    var appid = '20191116000357528';
                    var key = 'sMyfI2MaakUH_tUJtBnJ';
                    //
                    var salt = (new Date).getTime();
                    var query = 'add';
                    // 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
                    var from = 'en';
                    var to = 'zh';
                    var str1 = appid + query + salt + key;
                    console.log(str1)
                    var sign = MD5(str1);
                    var data = {
                        q: query,
                        appid: appid,
                        salt: salt,
                        from: from,
                        to: to,
                        sign: sign
                    }
                    fetch('http://localhost:5000/api/users/test', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body:JSON.stringify(data),
                        }).then(res=>{
                            console.log(res.data)
                        });
                //   fetch('https://mywebsite.com/mydata.json').then(res=>{
                //         console.log(res)
                //     });
                }}
                // value = {this.state.text}
                />
                <Text style={{textAlign:'center',fontSize:30}}>
                    {this.state.text}
                </Text>
            </View>
        )
    }
}


const AppNavigator = createStackNavigator({
    Home,
})




export default createAppContainer(AppNavigator);
