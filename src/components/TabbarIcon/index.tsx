import * as React from 'react';
import {Image, StyleSheet} from 'react-native';
interface Props {
  focused?:boolean
  tintColor?:string
  routeName?:string,
  style?:any
}
export default React.memo((props:Props)=>{
  const {focused,tintColor,routeName,style}=props
  const name=routeName || 'Home'
  const icon:any={
    Home:focused?require('../../theme/default/icons/home_active.png'):require('../../theme/default/icons/home.png'),
    User:focused?require('../../theme/default/icons/setting_active.png'):require('../../theme/default/icons/setting.png')
  }
  return (
    <Image source={icon[name]} style={[styles.imageContainer,{tintColor:tintColor},{...style}]} resizeMode='contain'/>
  )
})
const styles=StyleSheet.create({
  imageContainer:{
    height:24
  }
})