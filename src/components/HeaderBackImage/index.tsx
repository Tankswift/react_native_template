import { HeaderBackButton } from '@react-navigation/stack';
import * as React from 'react';
import {View,Image,StyleSheet} from 'react-native';
export default (props:any)=>{
  return (
    <View style={styles.imgContainer}>
      <Image source={require('../../theme/default/icons/icon_back.png')} style={styles.image}/>
    </View>
  )
}
const styles=StyleSheet.create({
  imgContainer:{
    // paddingRight:6,
    // paddingLeft:15
  },
  image:{
    height:16,
    width:10,
    resizeMode:'contain',
    backgroundColor:'transparent'
  }
})