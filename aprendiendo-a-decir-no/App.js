import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Login from './screens/Login'
import Inicio from './screens/Inicio';

const Stack = createStackNavigator()

function MyStack()
{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{title: 'Iniciar sesion', headerStyle: {backgroundColor: '#713C6A'}, headerTintColor: 'white' }} />
      <Stack.Screen name="Inicio" component={Inicio} options={{title: 'Inicio', headerStyle: {backgroundColor: '#713C6A'}, headerTintColor: 'white' }}></Stack.Screen>
    </Stack.Navigator>
  )
}


export default function App() 
{
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  container: 
  {
    flex: 1, 
    backgroundColor: '#fff',
    alignItems: 'center', 
    justifyContent: 'center'
  },
  header: {
    backgroundColor: '#713C6A',
    justifyContent: 'center',
  }

})
