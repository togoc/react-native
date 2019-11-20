import React,{Component} from 'react'
import {
    Button,
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableNativeFeedback,
    FlatList,
    SectionList
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';



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





class ContactList extends Component{
    _extraUniqueKey(item ,index){
        return "index"+index+item;
    }
    render(){
        const {width} = Dimensions.get('window')
        return (
            <View >
                <SectionList
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={{ fontWeight: "bold",backgroundColor:'#ccc',paddingLeft:20}}>{title}</Text>
                        )}
                    renderItem={({ item, index, section }) => 
                    <TouchableNativeFeedback
                    onPress={()=>{
                       alert("你点击的是 "+item)
                    }}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                            <View style={{display:'flex'}}>
                                   <View style={[style.flex,{justifyContent:'center',alignItems:'center'}]}>
                                        <View style={[style.flex,{flexDirection:'row',width:width-20}]}>
                                            <Image
                                                style={{width:45,height:45,margin:5,borderRadius:5}}
                                                source={require('./logo.png')}
                                            />
                                            <View style={[style.flex,{justifyContent:'center',marginLeft:2,borderTopWidth:1,borderTopColor:'#EDEDED'}]}>
                                                <View  style={[style.flex,{flexDirection:'row',flex:1}]}>
                                                    <Text   key={index} style={{flex:4,fontSize:16,color:'#03081B'}}>
                                                        {item}
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                            </View>
                            </TouchableNativeFeedback>
                        }
                    sections={[
                        {title:"D",data:["Devin","Dan","Dominic"]},
                        {title:"J",data:["Jillian","Joel","Julie","John"]},
                        { title: 'Title2', data: ['item3', 'item4'] },
                        { title: 'Title3', data: ['item5', 'item6'] },
                    ]}
                    keyExtractor={(item, index) => item + index}
                    />
            </View>
        )
    }
}

  


class ContactScren extends Component{
    static navigationOptions={
        title:"联系人"
    }
    render(){
        return (
            <View>
                <ContactList></ContactList>
            </View>
        )
    }
}


class HomeScreen extends Component{
    static navigationOptions={
        headerTitle:()=><Title></Title>
    }
    render(){
        const {width} = Dimensions.get('window')
        return (
            <View style={[style.home,{width}]}>
                <View style={[style.constainer,{width,marginBottom:10}]}>
                    <Msg></Msg>
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






const ContactStack = createStackNavigator({
    Contact:ContactScren,
},
{
    initialRouteName: 'Contact',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
    headerStyle: {
    backgroundColor: '#11D6BB',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
    fontWeight: 'bold',
    },
    }
    })

const HomeStack = createStackNavigator({
    Home:HomeScreen
},
{
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
    headerStyle: {
    backgroundColor: '#11D6BB',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
    fontWeight: 'bold',
    },
    }
    })

const TabNavigator=createBottomTabNavigator({
    Message:HomeStack,
    Contact:ContactStack
},{
    tabBarOptions:{
        pressColor : 'blue',
        activeBackgroundColor:'#11D6BB'
    }
})














export default createAppContainer(TabNavigator)