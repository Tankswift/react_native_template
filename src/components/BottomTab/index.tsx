import * as React from 'react';
import { View ,StyleSheet,TouchableNativeFeedback, Text} from 'react-native';
import TabbarIcon from '../TabbarIcon'
export default (props:any)=>{
  const { state,navigation }=props
  const onPress=(pathName:string)=>{
    navigation.navigate(pathName)
  }
  return (
    <View style={styles.BottomContainer}>
      {
        state.routes.map((route:any,index:number)=>{
          const isFocused=state.index===index
         return(
            <TouchableNativeFeedback key={route.name} onPress={()=>onPress(route.name)}>
              <View style={styles.itemTab}>
                <TabbarIcon routeName={route.name} focused={isFocused}/>
                <Text style={isFocused?styles.tintItemTxt:styles.itemTxt}>{route.name}</Text>
              </View>
            </TouchableNativeFeedback>
         )
        })
      }

    </View>
  )
}
const styles=StyleSheet.create({
  BottomContainer:{
    flexDirection:'row',
    backgroundColor:'white'
  },
  itemTab:{
    flex:1,
    justifyContent:'space-evenly',
    alignItems:'center',
    height:50
  },
  itemTxt:{
    color:'black'
  },
  tintItemTxt:{
    color:'blue'
  } 
})