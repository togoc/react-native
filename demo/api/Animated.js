import React, { useState, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';

const FadeInView = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0))  // 透明度初始值设为0

  React.useEffect(() => {
    //单个动画
    // Animated.timing(                  // 随时间变化而执行动画
    //     fadeAnim,                       // 动画中的变量值
    //     {
    //       toValue: 1,                   // 透明度最终变为1，即完全不透明
    //       duration: 500,              // 让动画持续一段时间
    //     }
    //   ).start();                        // 开始执行动画

    //多个动画顺序执行
      Animated.sequence(
          [    Animated.timing(                  // 随时间变化而执行动画
            fadeAnim,                       // 动画中的变量值
            {
              toValue: 1,                   // 透明度最终变为1，即完全不透明
              duration: 500,              // 让动画持续一段时间
            }
          ),
          Animated.timing(                  // 随时间变化而执行动画
            fadeAnim,                       // 动画中的变量值
            {
              toValue: 0.9,                   // 透明度最终变为1，即完全不透明
              duration: 500,              // 让动画持续一段时间
            }
          ),
        
        ]
      )
.start();                        // 开始执行动画
  }, [])

  return (
    <Animated.View                 // 使用专门的可动画化的View组件
      style={{
        ...props.style,
        opacity: fadeAnim,         // 将透明度绑定到动画变量值
      }}
    >
      {props.children}
    </Animated.View>
  );
}

// 然后你就可以在组件中像使用`View`那样去使用`FadeInView`了
export default () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
      </FadeInView>
    </View>
  )
}
// https://reactnative.cn/docs/animations/
//仅封装了6个可以动画化的组件：View、Text、Image、ScrollView、FlatList和SectionList
//不过你也可以使用 Animated.createAnimatedComponent()来封装你自己的组件。