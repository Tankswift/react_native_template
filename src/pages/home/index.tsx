import React,{useEffect,useState} from 'react';
import {View,Text} from 'react-native';
import useThemeContext from '../../hooks/useThemeContext'
import { getCurrentLocation } from '../../components/RNAmapGeolocation'
const Home =()=>{
  const {theme}=useThemeContext()
  const {colors,icons}=theme
  return (
    <View>
      <Text></Text>
    </View>
  )
}
export default Home