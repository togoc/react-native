
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ViewPager from '@react-native-community/viewpager';

export default MyPager = () => {
  return (
    <View style={{height:300,backgroundColor:'gray'}}>
           <ViewPager
    //样式
    style={styles.viewPager}
    //起始页
    initialPage={0}
    //是否可滑动
    // scrollEnabled={false}

    // 滑动过程执行内容(多次) onPageScroll: (e: PageScrollEvent) => void
    // onPageScroll={()=>{
    //     alert("1")
    // }}
      
    // Function called when the page scrolling state has changed
    // onPageScrollStateChanged: (e: PageScrollStateChangedEvent) => void

    // This callback will be called once the ViewPager finishes navigating to the selected page
    // onPageSelected: (e: PageSelectedEvent) => void

    // Blank space to be shown between pages
    // pageMargin: number

    // 键盘是否隐藏
    // keyboardDismissMode: ('none' / 'on-drag')

    // Set horizontal or vertical scrolling orientation (it does not work dynamically)
    // orientation:orientation 

    // transitionStyle='curl'//scroll or curl

    showPageIndicator={true}
      >
        <View key="1">
            <Text>First page</Text>
        </View>
        <View key="2">
            <Text>Second page</Text>
        </View>
    </ViewPager>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
});

//只能左右滑动不能自动
// https://github.com/react-native-community/react-native-viewpager
