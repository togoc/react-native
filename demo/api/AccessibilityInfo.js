import React, { Component } from 'react'
import { Text, View ,AccessibilityInfo} from 'react-native'

export default class AccessibilityStatusExample extends React.Component {
    state = {
      reduceMotionEnabled: false,
      screenReaderEnabled: false,
    };
  
    componentDidMount() {
      AccessibilityInfo.addEventListener(
        'reduceMotionChanged',
        this._handleReduceMotionToggled,
      );
      AccessibilityInfo.addEventListener(
        'screenReaderChanged',
        this._handleScreenReaderToggled,
      );
  
      AccessibilityInfo.isReduceMotionEnabled().then((reduceMotionEnabled) => {
        this.setState({reduceMotionEnabled});
      });
      AccessibilityInfo.isScreenReaderEnabled().then((screenReaderEnabled) => {
        this.setState({screenReaderEnabled});
      });
    }
  
    componentWillUnmount() {
      AccessibilityInfo.removeEventListener(
        'reduceMotionChanged',
        this._handleReduceMotionToggled,
      );
  
      AccessibilityInfo.removeEventListener(
        'screenReaderChanged',
        this._handleScreenReaderToggled,
      );
    }
  
    _handleReduceMotionToggled = (reduceMotionEnabled) => {
      this.setState({reduceMotionEnabled});
    };
  
    _handleScreenReaderToggled = (screenReaderEnabled) => {
      this.setState({screenReaderEnabled});
    };
  
    render() {
      return (
        <View>
          <Text>
            The reduce motion is{' '}
            {this.state.reduceMotionEnabled ? 'enabled' : 'disabled'}.
          </Text>
          <Text>
            The screen reader is{' '}
            {this.state.screenReaderEnabled ? 'enabled' : 'disabled'}.
          </Text>
        </View>
      );
    }
  }
