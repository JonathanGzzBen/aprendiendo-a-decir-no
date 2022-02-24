import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Login from './screens/Login'
import Inicio from './screens/Inicio';
import Register from './screens/Register';
import { TouchableHighlight } from 'react-native-gesture-handler';

const Stack = createStackNavigator()

function MyStack()
{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{title: 'Iniciar sesión', headerStyle: {backgroundColor: '#713C6A'}, headerTintColor: 'white' }} />
      <Stack.Screen name="Register" component={Register} options={{title: 'Registrarse', headerStyle: {backgroundColor: '#713C6A'}, headerTintColor: 'white' }} />
      <Stack.Screen name="Inicio" component={Inicio} options={{title: 'Inicio', headerStyle: {backgroundColor: '#713C6A'}, headerTintColor: 'white'}}></Stack.Screen>
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
