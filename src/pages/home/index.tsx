import * as React from 'react';
import {View,Text} from 'react-native';
import useThemeContext from '../../hooks/useThemeContext'
const Home =()=>{
  const {theme}=useThemeContext()
  const {colors,icons}=theme
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}
export default Home