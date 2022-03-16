import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity, Alert}  from 'react-native';
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import {firebaseConfig} from '../database/firebase'
import { getFirestore, collection, addDoc, setDoc, doc} from 'firebase/firestore';

const Register = (props) => 
{
    const [email, setEmail] = useState('')
    const [TutorName, setTutorName] = useState('')
    const [TutorAge, setTutorAge] = useState('')
    const [KidName, setKidName] = useState('')
    const [KidAge, setKidAge] = useState('')
    const [password, setPassword] = useState('')

    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app);
    const db = getFirestore(app)

    const handleRegister= () => {
        if (TutorAge < 18)
        {
            alert('El tutor debe ser mayor de edad')
        }
        else
        {
            setDoc(doc(db, "users", email), 
            {
              name: KidName, 
              age: KidAge, 
              email: email
            });
            createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                props.navigation.navigate('Login');
            })
            .catch(error => {
                const errorMessage = error.message;
                Alert.alert(errorMessage)
            })
        }
    }

    return(
        <ScrollView>

            <View>
                <View style={{alignItems: 'center', paddingTop: 30}}><Text style = {styles.SubTitle}>DEBES TENER MAS DE 18 AÑOS PARA REGISTRARTE</Text></View>
                <Image style={styles.Images} source={require('../src/img/user.png')}/>

                <View style = {{paddingTop: 30}}>

                    <Text style = {styles.Data}>Email</Text>
                    <TextInput 
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    />

                    <Text style = {styles.Data}>Nombre del tutor</Text>
                    <TextInput 
                    style={styles.input}
                    value={TutorName}
                    onChangeText={(text) => setTutorName(text)}
                    />

                    <Text style = {styles.Data}>Edad del tutor</Text>
                    <TextInput 
                    keyboardType="numeric"
                    style={styles.input}
                    value={TutorAge}
                    onChangeText={(text) => setTutorAge(text)}
                    />

                    <Text style = {styles.Data}>Nombre del menor</Text>
                    <TextInput 
                    style={styles.input}
                    value={KidName}
                    onChangeText={(text) => setKidName(text)}
                    />

                    <Text style = {styles.Data}>Edad del menor</Text>
                    <TextInput 
                    keyboardType="numeric"
                    style={styles.input}
                    value={KidAge}
                    onChangeText={(text) => setKidAge(text)}
                    />

                    <Text style = {styles.Data}>Contraseña</Text>
                    <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                    />
                </View>

                <TouchableOpacity onPress={handleRegister} style = {styles.button}>
                    <Text style = {styles.textButton}>Registrarse</Text>
                </TouchableOpacity>

            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    },
    Images: {
  
      height: 125, 
      width: 125, 
      alignSelf: 'center',
      
    }, 
    SubTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      textDecorationLine: 'underline', 
      textAlign: 'center',
      margin: 20
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
    button: {
      backgroundColor: '#713C6A',
      padding: 10, 
      alignSelf: 'center',
      borderRadius: 15,
      margin: 30, 
      paddingLeft: 40, 
      paddingRight: 40
    },
    textButton: {
      color: 'white',
      fontSize: 20
    }, 
});

export default Register