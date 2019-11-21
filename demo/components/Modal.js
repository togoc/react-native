import React, { Component } from "react";
import { Modal, Text, TouchableHighlight, View } from "react-native";

 export default class ModalExample extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={{ marginTop: 22 }}>
        <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        
        //  onShow 回调函数会在 modal 显示时调用。
        //  transparent 属性是指背景是否透明,默认为白色,将这个属性设为：true 的时候弹出一个透明背景层的modal。
        //  打开时,安卓上按返回键触发事件
        //   animationType
        //   animationType指定了 modal 的动画类型。
        //   slide 从底部滑入滑出。
        //   fade 淡入淡出。
        //   none 没有动画，直接蹦出来。
        //   默认值为none。
        animationType={('slide')}

        // hardwareAccelerated属性决定是否强制启用硬件加速来绘制弹出层。
        hardwareAccelerated={true}
        
        // onDismiss回调会在 modal 被关闭时调用 IOS。
        
        onRequestClose={() => {
           // alert("Modal has been closed.");
            this.setModalVisible(!this.state.modalVisible);
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}