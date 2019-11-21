// https://reactnative.cn/docs/refreshcontrol/
// FlatList 中有使用

import React,{Component} from 'react'
import {ScrollView,RefreshControl,View,Text} from 'react-native'

export default class RefreshableList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        refreshing: false,
      };
    }
  
    _onRefresh = () => {
      this.setState({refreshing: true});
    //   fetchData().then(() => {
    //     this.setState({refreshing: false});
    //   });
    }
  
    render() {
      return (
        <ScrollView
          refreshControl={
            <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
            />
          }
        />
      );
    }
  }