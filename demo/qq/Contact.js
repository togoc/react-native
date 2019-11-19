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


export default class ContactScren extends Component{
    static navigationOptions={
        title:"联系人"
    }
    render(){
        return (
            <View>
               <Msg></Msg>
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