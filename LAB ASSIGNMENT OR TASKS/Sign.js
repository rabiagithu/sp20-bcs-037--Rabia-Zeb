import React from 'react';
import { StyleSheet, Text, SafeAreaView ,Image, View } from 'react-native';

export default function Sign(){
return(

    <SafeAreaView style={[styles.container, containerstyle]}>
    <View style={styles.box4}>
    
    </View>
  
    <View> 
    <Text style={styles.box1}>My Application</Text>
    <Text  style={styles.box2}>Food and Health</Text>
    </View>
  
    <View> 
    <Text style={styles.box3}>Sign up</Text>
    
    </View>
    <View> 
    <Text style={styles.box5}>Already have a path Account?</Text>
    </View>
    <View> 
    <Text style={styles.box6}>Log in</Text>
    </View>
    <View> 
    <Text style={styles.box7}>by using this app. you agree to</Text>
    </View>
    <View> 
    <Text style={styles.box7}>path's <span style={{color: 'white'}}><u>terms of uses</u></span> and <span style={{color: 'white'}}><u>Privacy</u></span></Text>
    </View>
    <View> 
    <Text style={styles.box7}><span style={{color: 'white'}}><u>Policy</u></span></Text>
    </View>
    <View> 
    <Text style={styles.box8}>Path</Text>
    </View>
  
    </SafeAreaView>
  );
  }
  const containerstyle={backgroundColor:'lightpink'}
  const styles=StyleSheet.create(
    {
      container:{
        flex:1,
      
      justifyContent:'center',
      alignItems:'center',
    },
    
    box1:{  
      color:'white',
      justifyContent:'center',
      alignItems:'center',
      textAlign:'center',
      fontSize: 40,
      marginBottom:10
  
    },
    box2:{
      flex:1,
      color:'white',
      justifyContent:'center',
      alignItems:'center',
      fontSize: 15,
    },
    box3:{
      marginTop:90,
      
      width: 130 , 
      height:35,
      borderRadius:6,
      
      color:'lightpurple',
      backgroundColor:"white",
      textAlign:'center',
      fontSize: 18,
    },
    Imagesi:{
      marginBottom:70,
      width:50,
      height:50
    },
    box4:{
      marginBottom:10,
      width:50,
      height:50
    },
    box5:{
      color:'gray',
      justifyContent:'center',
      alignItems:'center',
      marginTop:5,
      fontSize: 13,
      
    },
    box6:{
      marginTop:30,
      
      width: 130 , 
      height:35,
      borderRadius:6,
      borderColor:"white",
      borderWidth:1,
      color:'white',
      textAlign:'center',
      fontSize: 18, 
    },
    box7:{
      color:'lightblue',
      justifyContent:'center',
      alignItems:'center',
      marginTop:5,
      fontSize: 13,
      
    },
    box8:{
      color:'black',
      justifyContent:'center',
      alignItems:'center',
      marginTop:5,
      fontSize: 25,
      fontStyle:'italic',
      fontWeight:'bold'
    },
  }
      )