import * as React from 'react';
import { View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({route, navigation}) {
  return (  
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Text>{route.params.name}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details',{name: "This is from Home"})}
      />
    </View>
  );
}
function DetailsScreen({route,navigation}) {
  const {name} = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text style={{color:"red"}}>{route.params.name}</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate.popToTop()}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Update Params" onPress={() => {navigation.setParams({name:"Updated Name",})}}
       ></Button>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} initialParams={{name:"Initial Value"}} />
        <Stack.Screen name="Details" component={DetailsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App