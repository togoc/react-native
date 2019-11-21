// import React, { Component } from 'react';
// import { Image } from 'react-native';

// export default class Bananas extends Component {
//   render() {
//     let pic = {
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };
//     return (
//       <Image 
//     //   source={require('./logo.png')}
//        source={pic}
//        style={{width: 193, height: 110}}
//         />
//     );
//   }
// }

import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Greeting extends Component {
  render() {
      return (
      <View style={{alignItems: 'center', marginTop: 50}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
      console.log(this.props.name)
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}