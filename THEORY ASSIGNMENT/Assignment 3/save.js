import * as React from 'react';
import {
  StyleSheet,
  Button,
  TouchableHighlight,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import {useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Screens
import Profile from './screens/Profile';

import SignUp from './screens/Signup';


//Screen names
function login({ navigation }) {



  const [passwordl, setpasswordl] = useState('');
  const [Emaill, setemaill] = useState('');

  const [pass, setpass] = useState('');
  const [Emai, setemai] = useState('');
  let email,password,parsed; 

  /* const getData = async () => {
    try {
      
     const jsonValue = await AsyncStorage.getItem(Emaill)
      data=jsonValue;
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  } */
  const getData = async () => {
    try {

      let value = await AsyncStorage.getItem(Emaill);  
      parsed = JSON.parse(value); 
      email=parsed.email; 
      password=parsed.password;
     
      setemai(email)
      setpass(password)
      console.log(Emai);
      console.log(pass)
      
   
      
    } catch(e) {
      // error reading value
    }
  }
  
  return (
    <View style={styles.parentcont}>
    <View style={styles.container}>
      <Image
        style={styles.pic}
        source={require("./assets/Saly-1intro-image.png")}
      ></Image>
      <Text style={styles.text_login}>Login</Text>
    </View>
    <View>
      <Text style={styles.spce}></Text>
    </View>
    <View>
     
      <TextInput
      
       onChangeText={(name) => setemaill(name)}
        style={styles.input}
        value={Emaill}
       
        placeholder="Email"
        placeholderTextColor="black"
        autoCapitalize="none"
      ></TextInput>
      
      <TextInput
       value={passwordl}
       onChangeText={(email) =>setpasswordl(email)}
        style={styles.input}
        secureTextEntry={true}
  
        placeholder="Password"
       
        placeholderTextColor="black"
        autoCapitalize="none"
      ></TextInput>
      <Text style={styles.test_forget}>Forget Password ?</Text>
     
    </View>
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={()=>{
           if(Emaill===''){
              alert("Email is Required")
              return;
            }
            if(passwordl===''){
              alert("Email is Required")
              return;
            }
         
            getData();
            alert(Emai)
            if(Emaill!==Emai){
              alert("Email Does Not Match")
              return;
            }
            if(passwordl!==pass){
              alert("Password Does Not Match")
              return;
            }
            
            
            navigation.navigate("Profile",{
              email:Emaill,
            })
            setemaill('')
            setpasswordl('')
          
      }}>
      <Text style={styles.Button}>LOGIN</Text>
      </TouchableOpacity>
     
    </View>
    <View>
     
    </View>
    <View style={{ flexDirection: "row",marginTop:50 }}>
      <Text style={styles.text_noacc}>Don't hava an account ?</Text>
      <TouchableOpacity  onPress={() => navigation.navigate('SignUp')}>
      <Text style={styles.text_reg}> Register</Text>
      </TouchableOpacity>
      
    </View>
  </View>

  );
}


const Stack = createNativeStackNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
     <Stack.Navigator >
     <Stack.Screen name="Login" component={login} />
     <Stack.Screen name="Profile" component={Profile} />
    
      <Stack.Screen name="SignUp" component={SignUp} />
   
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;

const styles = StyleSheet.create({
  parentcont: {
    
 
  
    alignItems: "center",
    flex:1,
    backgroundColor: "white",
  },
  text: {
    alignContent: "center",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  spce: {
    marginTop: 18,
  },
  text1: {
    marginTop: 20,
    alignContent: "center",
    fontSize: 12,
    textAlign: "center",
    color: "black",
  },
  container: {
    height: 340,
  
   
    width: 370,
    borderBottomLeftRadius: 100,
    backgroundColor: "#ff7700",
  },
  pic: {
    height: 250,
    width: 250,
    marginLeft:50,
    marginTop:20
 
  },
  Button: {
    fontSize: 13,
    width: 250,
    color: "white",
    marginTop:70,
    borderRadius: 50,
    backgroundColor: "#ff7700",
    textAlign: "center",
    fontWeight: "bold",
    alignItems: "center",
    lineHeight: 40,
  },
  Button1: {
    fontSize: 18,
    width: 120,
    lineHeight: 55,
    fontWeight: "bold",
    textAlign: "center",
    marginRight: 20,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: "#f8f8ff",
  },
  text_login: {
    fontSize: 30,
    marginTop:20,
    marginRight: 25,
    color: "#f8f8ff",
    textAlign: "right",
  },
  input_email: {
    height: 20,
  },
  text_noacc: {
    fontSize: 13,
    color: "black",
  },
  text_reg: {
    fontSize: 13,
    color: "#ff7700",
  },
  input: {
    width: 320,
    height: 45,
    fontSize:16,
    marginTop:20,
   
    paddingStart:20,
    borderColor: "#ff7700",
    alignItems: "center",
    borderWidth: 1,
    alignSelf:'center',
    borderRadius: 10,
  },
  test_forget: {
    fontSize: 13,
    color: "black",
    textAlign: "right",
    marginTop: 15,
  },
});