import React,{Component} from 'react'
import {
    Button,
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableHighlight,
    Image,
    TouchableNativeFeedback,
    FlatList
} from 'react-native';




class Title  extends Component{
    render(){
        const {width} = Dimensions.get('window')
        return (
            <View style={{display:'flex',flexDirection:'row',width,flex:1}}>
               <View
                    style={{width:35,height:35,marginLeft:5,flex:1}}
                    >
                <Image
                    style={{width:35,height:35,marginLeft:5,flex:1}}
                    source={require('./logo.png')}
                    />
               </View>
                <Text style={[style.flex,{flex:2,justifyContent:'center',textAlign:'center'}]}>消息</Text>
                <View style={[style.flex,{flexDirection:'row',justifyContent:'space-evenly'}]}>
                    <Text>-</Text>
                    <Text>+</Text>
                </View>
            </View>
        )
    }
}


class Msg extends Component {
    render(){
        const {width} = Dimensions.get('window')
        return (
            <View style={style.container}>
                <FlatList
                data={[
                    {key: 'Devin'},
                    {key: 'Dan'},
                    {key: 'Dominic'},
                    {key: 'Jackson'},
                    {key: 'James'},
                    {key: 'Joel'},
                    {key: 'John'},
                    {key: 'Jillian'},
                    {key: 'Jimmy'},
                    {key: 'Julie'},
                ]}
                renderItem={({item}) =>
                <TouchableNativeFeedback
                onPress={()=>{
                   alert("你点击的是 "+item.key)
                }}
                background={TouchableNativeFeedback.SelectableBackground()}>
                   <View style={{backgroundColor:'#fff',display:'flex',paddingTop:10}} >
                                            <View style={[style.flex,{justifyContent:'center',alignItems:'center'}]}>
                                                <View style={[style.flex,{flexDirection:'row',width:width-20}]}>
                                                    <Image
                                                        style={{width:45,height:45,margin:5,borderRadius:5}}
                                                        source={require('./logo.png')}
                                                    />
                                                    <View style={[style.flex,{justifyContent:'center',marginLeft:2}]}>
                                                        <View  style={[style.flex,{flexDirection:'row',flex:1}]}>
                                                            <Text style={{flex:4,fontSize:16,color:'#03081B'}}>
                                                                {item.key}
                                                            </Text>
                                                            <Text  style={{flex:1,fontSize:10,color:'#A4A4A4'}}>
                                                                time
                                                            </Text>
                                                        </View>
                                                        <Text  style={{fontSize:12,color:'#A4A4A4',flex:1}}>Msg</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                </TouchableNativeFeedback>
                    }/>
            </View>
        )
    }
}






class HomeScreen extends Component{
    static navigationOptions={
        headerTitle:()=><Title></Title>
    }
    render(){
        const {width,height} = Dimensions.get('window')
        return (
            <View style={[style.home,{width}]}>
                <View style={[style.constainer,{width,marginBottom:10}]}>
                    <Msg></Msg>
                </View>
                <View style={[style.nav,{width}]} >
                    <TouchableNativeFeedback
                       onPress={this._onPressButton}
                       background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={{display:'flex',flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Image
                                    style={{width:30,height:30}}
                                    source={require('./logo.png')}
                                />
                        <Text style={{margin: 0}}>消息</Text>
                    </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                       onPress={this._onPressButton}
                       background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={{display:'flex',flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Image
                                    style={{width:30,height:30}}
                                    source={require('./logo.png')}
                                />
                        <Text style={{margin: 0}}>联系人</Text>
                    </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                       onPress={this._onPressButton}
                       background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={{display:'flex',flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Image
                                    style={{width:30,height:30}}
                                    source={require('./logo.png')}
                                />
                        <Text style={{margin: 0}}>动态</Text>
                    </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        )
    }
}


const style = StyleSheet.create({
    flex:{
        display:"flex",
        flex:1
    }
    ,
    home:{
        display:'flex',
        flexDirection:'column',
        flex:1
    },
    constainer:{
        flex:8,
        backgroundColor:'#F5F6FA',
    }
    ,
    nav:{
        flex:1,
        backgroundColor:'#11D6BB',
        display:'flex',
        flexDirection:'row',

    } ,
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
})


