import * as React from 'react';
import {useState,useEffect} from 'react';
import { View, Text,StyleSheet,SafeAreaView, TouchableOpacity, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = ({route}) => {

  let email  = route.params.email;
  const [namep, setnamep] = useState('');
  const [emailp, setemailp] = useState('');
  const [passwordp, setpassp] = useState('');
  const [phonep, setphonep] = useState('');
 let parsed;
  const getData = async () => {
    try {

      let value = await AsyncStorage.getItem(email);  
      parsed = JSON.parse(value); 
    
    setemailp(parsed.email);
    setnamep(parsed.name);
    setphonep(parsed.phone);
    setpassp(parsed.password);
      
   
      
    } catch(e) {
      // error reading value
    }
  }
  useEffect(() => {
    getData();
    console.log("data")
   },[]);

    
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
        <Text style={{ fontSize: 35, fontWeight: 'bold',marginBottom:40}}>
          User Data
          </Text>
        
        <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Name
          </Text>
          <Text style={{ fontSize: 28, fontWeight: 'bold' }}>
          {namep}
          </Text>
      
        <Text style={{ fontSize: 35, fontWeight: 'bold' ,marginTop:20}}>Email</Text>
          <Text style={{ fontSize: 28, fontWeight: 'bold' }}>
           {emailp}
          </Text>
          <Text style={{ fontSize: 35, fontWeight: 'bold',marginTop:20 }}>
          Password
          </Text>
          <Text style={{ fontSize: 28, fontWeight: 'bold' }}>
            {passwordp} 
          </Text>
      
      
          
      
    
        <Text style={{ fontSize: 35, fontWeight: 'bold' ,marginTop:20}}>
          Phone
          </Text>
         

          <Text style={{ fontSize: 28, fontWeight: 'bold' }} >
            {phonep}
          </Text>
          
         
      
   
          
         
        </View>
        
      </SafeAreaView>
    );
  };
  
  export default ProfileScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 20,
    },
    heading: {
      fontSize: 25,
      textAlign: 'center',
      marginVertical: 10,
    },
    textStyle: {
      textAlign: 'center',
      fontSize: 16,
      marginVertical: 10,
    },
  });