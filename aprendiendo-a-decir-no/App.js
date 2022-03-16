import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Login from './screens/Login'
import Inicio from './screens/Inicio';
import Register from './screens/Register';
import Mujeres from './screens/Mujeres';
import Hombres from './screens/Hombres';
import Contacto from './screens/Contacto';
import Configuracion from './screens/Configuracion';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator();

export default function App() 
{
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

function MyStack()
{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{title: 'Iniciar sesión', headerStyle: {backgroundColor: '#713C6A'}, headerTintColor: 'white' }} />
      <Stack.Screen name="Register" component={Register} options={{title: 'Registrarse', headerStyle: {backgroundColor: '#713C6A'}, headerTintColor: 'white' }} />
      <Stack.Screen name="Inicio" component={MyDrawer} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

function MyDrawer() {
  return (
      <Drawer.Navigator initialRouteName='Inicio' drawerContent={(props)=> <Menu {...props}/>}>
        <Drawer.Screen name="Inicio" component={Inicio} options={{title: 'Inicio', headerStyle: {backgroundColor: '#713C6A'}, headerTintColor: 'white'}} />
        <Drawer.Screen name="Mujeres" component={Mujeres} options={{title: 'Mujeres', headerStyle: {backgroundColor: '#713C6A'}, headerTintColor: 'white'}} />
        <Drawer.Screen name="Hombres" component={Hombres} options={{title: 'Hombres', headerStyle: {backgroundColor: '#713C6A'}, headerTintColor: 'white'}} />
        <Drawer.Screen name="Contacto" component={Contacto} options={{title: 'Contacto', headerStyle: {backgroundColor: '#713C6A'}, headerTintColor: 'white'}} />
        <Drawer.Screen name="Configuración" component={Configuracion} options={{title: 'Configuración', headerStyle: {backgroundColor: '#713C6A'}, headerTintColor: 'white'}} />
      </Drawer.Navigator>
  );
}


function Menu(props)
{
  return(
    <View style = {s.container}>
      <View style = {s.bgContainer}>
        <TouchableOpacity>
          <View style = {s.userContainer}>
            <Image style = {s.userImagen} source={require('./src/img/user.png')}/>
          </View>
          <View style = {s.userNombre}>
            <Text style = {s.userTitulo}>User</Text>
            <Text style = {s.userSubTitulo}>8 años</Text>
          </View>
        </TouchableOpacity>
      </View>

      <DrawerItemList {...props}/>
    </View>
  )
}

const s = StyleSheet.create({

  container: {
    backgroundColor: 'white',
    flex: 1,
  },

  bgContainer: {
      borderBottomWidth: 0.5,
      borderBottomColor: '#A0A0A0'
  },

  userContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50
  },

  userImagen: {
      width: 70,
      height: 70,
      borderRadius: 35
  },

  camaraContainer: {
      justifyContent: 'center',
      alignItems: 'center'
  },

  camaraIcon: {
      width: 20,
      height: 20,
      position: 'absolute',
      left: 15,
      bottom: 3
  },

  userNombre: {
      marginVertical: 10,
  },

  userTitulo: {
      textAlign: 'center',
      fontWeight:'bold',
      fontSize: 16
  },

  userSubTitulo: {
      textAlign: 'center',
      fontSize: 11,
      color: '#713C6A',
      paddingVertical: 5,
  },
  menuContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginLeft: 10,
    marginVertical: 15,
  },

  iconoContainer: {
      flex: 1.5,
      justifyContent: 'center'
  },

  tituloContainer: {
      flex: 8.5,
      justifyContent: 'center'
  },

  tituloTxt: {
      fontSize: 13
  },
  difuminado:{
      flex:1,
      backgroundColor:'rgba(0, 0, 0, 0.5)'
  },
  fondoImagen:{
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
  }

})
