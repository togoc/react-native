import React from 'react';
import { Text, View,Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button
        title="goto Detials"
        onPress={()=>{
          this.props.navigation.navigate('Details')
        }}
        ></Button>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
});

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  // Details: DetailsScreen,
});

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Settings: SettingsStack,
},
{
  // defaultNavigationOptions: ({ navigation }) => ({
  //   tabBarIcon: ({ focused, horizontal, tintColor }) => {
  //     const { routeName } = navigation.state;
  //     let IconComponent = Ionicons;
  //     let iconName;
  //     console.log(routeName)
  //     if (routeName === 'Home') {
  //       iconName = `ios-information-circle${focused ? '' : '-outline'}`;
  //       // Sometimes we want to add badges to some icons.
  //       // You can check the implementation below.
  //       IconComponent
  //     } else if (routeName === 'Settings') {
  //       iconName = `ios-options`;
  //     }

  //     // You can return any component that you like here!
  //     return <IconComponent name={iconName} size={25} color={tintColor} />;
  //   },
  // }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
}
);




export default createAppContainer(TabNavigator);