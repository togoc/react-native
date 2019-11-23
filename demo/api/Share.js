import React, {Component} from 'react'
import {Share, Button} from 'react-native'

export default class ShareExample extends Component {

  async onShare(){
    try {
      const result = await Share.share({
        message:
          //分享的内容
          'React Native | A framework for building native apps using React',
      })

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          console.log(result.activityType)
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } 
    catch (error) {
      alert(error.message);
    }
  };

  render() {
    return (
      <Button 
      title="分享"
      onPress={this.onShare}></Button>
    );
  }

}