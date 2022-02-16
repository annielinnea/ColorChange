import React from 'react';
import {  StyleSheet,  View } from 'react-native';
import ChangeColor from './ChangeColor';
import ImagesChange from './ImagesChange';


//Css to App
const styles = StyleSheet.create({

  container:{
      justifyContent: 'center',
      alignItems: 'center',
      width: 414,
      flex:1
    
  },
  //Css to split the screen
  row: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 414,
    height: 450
  }
  
})

//Function Component, shows when starts
export default function App() {

  
 return(
 
  //Container with split screen that shows both Changecolor and ImagesChange
   <View style={styles.container}>

     <View style={styles.row}>
     <ChangeColor/>
     </View>

     <View style={styles.container}>
       <ImagesChange/>
     </View>

   </View>

 )

}