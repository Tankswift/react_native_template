// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HeaderBackImage from './src/components/HeaderBackImage';
import BottomTab from './src/components/BottomTab';
import Home from './src/pages/home';
import User from './src/pages/user';
const Stack = createStackNavigator();
const TAB=createBottomTabNavigator();
const Main_TAB = [
  {
    name:'Home',
    component:Home,
    options:{ //具体的每个tab设置
      title:'主页',
    }
  },
  {
    name:'User',
    component:User,
    options:{ //具体的每个tab设置
      title:'设置',
    }
  }
]
const mainTabScreen=()=>{
  return (
    <TAB.Navigator tabBar={(pros:any)=><BottomTab {...pros}/>}>
      {
        Main_TAB.map((tab:any)=>{
          return <TAB.Screen {...tab} key={tab.name}/>
        })
      }
    </TAB.Navigator>
  )
}
const APP_STACKS=[
  {
    name:'Home',
    component:mainTabScreen,
    options:{ //具体某个页面配置
      headerShown:false
    }
  },
  {
    name:'User',
    component:User,
  }
]
//header配置
const screenOptions={
  headerBackTitle:'返回' ,// ios显示返回按钮
  headerTitleAlign:'center',
  headerStyle:{
    height:44, //头部高度
    backgroundColor:'#F9F9F9' //背景颜色
  },
  headerLeft:(props:any)=><HeaderBackButton {...props}/> , //默认的返回按钮
  // headerBackImage:HeaderBackImage, // 自定义一个返回按钮
  headerTintColor:'red', //返回键和title的颜色
  headerTitleStyle:{ //title的样式设置
    fontSize:16,
    color:'black' 
  }
}
const headerNoContentOptions={
  headerStyle:{
    borderBottomWidth:0,
    elevation:0,
    shadowOpcity:0,
    backgaroundColor:'#FFF'
  }
}

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions} headerMode="float">
        {
          APP_STACKS.map((tab:any)=>{
            tab.options=tab.options || headerNoContentOptions
            return <Stack.Screen {...tab} key={tab.name}/>
          })
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;