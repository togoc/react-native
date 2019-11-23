import React from 'react';
import {
   Text,
   View,
   StyleSheet,
   Image,
   Button,ScrollView
}  from 'react-native';
import { 
  createAppContainer
         } from 'react-navigation';
import { 
createDrawerNavigator,
        } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';






class MyHomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle:()=><LogoTitle></LogoTitle>,
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./logo.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };
  render() {
    return (
      <View>
       <Text>MyHomeScreen</Text>
        <Button
        onPress={() => this.props.navigation.toggleDrawer()}
        title="open drawer"
      />
     </View>
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./logo.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };
  render() {
    return (
     <View>
       <Text>MyNotificationsScreen</Text>
        <Button
        onPress={() => this.props.navigation.toggleDrawer()}
        title="open drawer"
      />
     </View>
    );
  }
}


const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});


class LogoTitle extends React.Component {
  static navigationOptions = {
    drawerLabel: 'LogoTitle',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./logo.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };
  render() {
    return (
     <View>
       <Text>LogoTitle</Text>
        <Button
        onPress={() => this.props.navigation.toggleDrawer()}
        title="open drawer"
      />
     </View>
    );
  }
}






class DetailScreen extends React.Component{
  render(){
    return (
      <View>
        <Text>DetailScreen</Text>
      </View>
    )
  }
}

import SafeAreaView from 'react-native-safe-area-view';
import { DrawerItems } from 'react-navigation-drawer';
//自定义抽屉内容
const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={{flex: 1}}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <DrawerItems {...props} activeItemKey="1"   />
    </SafeAreaView>
  </ScrollView>
);


const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen 
   },
   LogoTitle:LogoTitle
},{
  initialRouteName:'Home',
  drawerPosition :'left',//left 或 right
  drawerType:'slide',
  drawerWidth:250,
  drawerBackgroundColor: 'pink', //white
  // edgeWidth:20
  // unmountInactiveRoutes:true
  contentComponent:CustomDrawerContentComponent
});
// https://reactnavigation.org/docs/zh-Hans/drawer-navigator.html



const DetailStack = createStackNavigator({
  Detail: DetailScreen,
});

const TabNavigator = createBottomTabNavigator({
  Home: MyDrawerNavigator,
  Detail: DetailStack,
})


export default createAppContainer(TabNavigator);