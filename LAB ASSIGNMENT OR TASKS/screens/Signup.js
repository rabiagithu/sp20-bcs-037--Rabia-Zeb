import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput ,TouchableOpacity} from 'react-native';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [name, setName] = useState('');
  const [Email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [cpassword, setcpassword] = useState('');
  const [phone, setphone] = useState('');

  const data={
    name:name,
    email:Email,
    password: password,
    cpassword:cpassword,
    phone:phone
  }
  
  

  const storeData = async () => {
    try {
      const value = await AsyncStorage.getItem(Email)
      console.log(value);
      console.log(".....")
    if(value !== null) {
        alert("Email Already Exists")
        return
      }
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem(Email, jsonValue)
      clear();
      alert("Submitted")
     
    } catch (e) {
      // saving error
    }
  }
  const clear=()=>{
    setName('');
    setemail('');
    setpassword('');
    setcpassword('');
    setphone('');
  }
  return (
    <View style={styles.container}>
      <Text style={{color:"orange",fontSize:30,marginTop:70,marginBottom:30}}>Register Yourself</Text>
      <TextInput style={styles.input1}
        
        editable={true}
        value={name}
        onChangeText={(name) => setName(name)}
        multiline={false}
        placeholder="Name"
        placeholderTextColor="black"
        maxLength={200}
        />
        <TextInput style={styles.input1}
        
        editable={true}
        value={Email}
        onChangeText={(email) => setemail(email)}
        keyboardType="email-address"
        multiline={false}
        placeholder="Email"
        placeholderTextColor="black"
        maxLength={200}
        />
        <TextInput style={styles.input1}
        
        editable={true}
        value={password}
        onChangeText={(password) => setpassword(password)}
       
        multiline={false}
        secureTextEntry={true}
        placeholder="Password"
        placeholderTextColor="black"
        maxLength={200}
        />
        <TextInput style={styles.input1}
        
        editable={true}
        value={cpassword}
        onChangeText={(cpass) => setcpassword(cpass)}
        
        multiline={false}
        secureTextEntry={true}
        placeholder="Confirm Password"
        placeholderTextColor="black"
        maxLength={200}
        />
         <TextInput style={styles.input1}
        
        editable={true}
        keyboardType="number-pad"
        value={phone}
        onChangeText={(phone) => setphone(phone)}
        multiline={false}
        placeholder="Phone Number"
        placeholderTextColor="black"
        maxLength={200}
        />
         <TouchableOpacity 
        onPress={() =>
          { if(name==''){
              alert("Name is Required")
              return;
            }
            if(Email==''){
              alert("Email is Required")
              return;
            }
            if(password==''){
              alert("Password is Required")
              return;
            }
            if(cpassword==''){
              alert("Confirm Password is Required")
              return;
            }
            if(password!==cpassword){
              alert("Password and Confirm Password Should be Same")
              return;
            }
            if(phone==''){
              alert("Phone Number is Required")
              return;
            }

            storeData();
            
         
          }}
       >
      <Text style={styles.Button}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  input1: {
    width: 350,
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
  Button: {
    fontSize: 15,
    width: 150,
    color: "white",
    marginTop:60,
    marginBottom:10,
    borderRadius: 10,
    backgroundColor: "#ff7700",
    textAlign: "center",
    alignSelf:'center',
    fontWeight: "bold",
    alignItems: "center",
    lineHeight: 40,
  },
});
