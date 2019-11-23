import React from 'react';
import { Button,View, Text ,Image} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  static navigationOptions={
    title:"Home",
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#black',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    );
  }
}


class DetailsScreen extends React.Component {
    static navigationOptions = {
      title: 'Details',
    };
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>
          itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}
        </Text>
        <Text>
          otherParam:
          {JSON.stringify(navigation.getParam('otherParam', 'default value'))}
        </Text>
        <Button
          title="Go to Details... again"
          onPress={() =>
            navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })
          }
        />
        <Button title="click" onPress={()=>{
          this.props.navigation.navigate('Test',{
            name:"togoc"
          })
        }} />
      </View>
    );
  }
}

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./logo.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

// static navigationOptions =({navigation})=>{
//   return {
//     headerTitle:()=><LogoTitle />,
//     headerRight: () => (
//       <Button
//         onPress={() => alert('This is a button!')}
//         title={navigation.getParam("name",'tgc')}
//         color="black"
//       />
//     ),
//   }
//  }
class Test extends React.Component{
  static navigationOptions ={
    headerTitle:()=><LogoTitle />,
    headerRight: () => (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="black"
      />
    ),
   }
  render(){
    const {navigation} = this.props
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>
          Hello {(navigation.getParam('name','tgc'))}
        </Text>
        <Button title='update title' onPress={()=>{
          this.props.navigation.setParams({name:"唐国超"})
        }} />
      </View>
    )
  }
}


const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Details:DetailsScreen,
  Test
 
},
{
  initialRouteName: 'Home',
  /* The header config from HomeScreen is now here */
  defaultNavigationOptions: {
  headerStyle: {
  backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
  fontWeight: 'bold',
  },
  }
  }
  );










export default createAppContainer(AppNavigator);