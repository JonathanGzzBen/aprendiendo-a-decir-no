import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView} from 'react-native';

export default function App() {
  return (
    <View style = {styles.container}>
      <StatusBar hidden />
      <View style={styles.header}><Text style = {styles.headerText}>Iniciar Sesión</Text></View>
      <Image style={styles.Images} source={require('./src/img/Login.jpeg')}/>
      <View style={{alignItems: 'center', paddingTop: 30}}><Text style = {styles.SubTitle}>¡Bienvenido de vuelta!</Text></View>


      <View style = {{paddingTop: 30}}>
        <Text style = {styles.Data}>Email</Text>
        <TextInput style={styles.input}></TextInput>
        <Text style = {styles.Data}>Contraseña</Text>
        <TextInput style={styles.input}></TextInput>
      </View>
    
      <View style = {styles.recover}><Text style = {styles.recoverText} onPress={() => Alert.alert('Pantalla para recuperar contra')}>Olvidé mi contraseña</Text></View>

      <TouchableOpacity onPress={() => Alert.alert('Pantalla inicio')} style = {styles.button}>
        <Text style = {styles.textButton}>Ingresar</Text>
      </TouchableOpacity>

      <View style = {styles.register}>

        <Text style = {styles.registerText}>¿No tienes cuenta? <Text style = {styles.registerLink} onPress={() => Alert.alert('Pantalla de registro')}>Regístrate</Text> </Text> 
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: '#713C6A',
    flex: .3,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 23,
    color: 'white',
    paddingLeft: 15,
  }, 
  Images: {

    height: 180, 
    width: '100%', 
    
  }, 
  SubTitle: {
    fontSize: 25,
    fontWeight: 'bold'
  }, 
  Data: {

    paddingLeft: 20, 
    fontSize: 16,
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    margin: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10, 
    borderColor: '#713C6A'
  },
  recover: {
    alignItems: 'flex-end',
    paddingRight: 10
  },
  recoverText: {
    color: '#713C6A',
    textDecorationLine: 'underline',
    fontWeight: 'bold'
  }, 
  button: {
    backgroundColor: '#713C6A',
    padding: 10, 
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: 30, 
    paddingLeft: 40, 
    paddingRight: 40
  },
  textButton: {
    color: 'white',
    fontSize: 20
  }, 
  register: {
    alignItems: 'center', 
    marginTop: 30
  },
  registerText: {
    color: 'darkgray'
  },
  registerLink: {
    color: '#713C6A'
  }
});
