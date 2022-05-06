import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import styles from "../style/GeneralStyles";

import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../database/firebase";
import { getFirestore, setDoc, doc } from "firebase/firestore";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [TutorName, setTutorName] = useState("");
  const [TutorAge, setTutorAge] = useState("");
  const [KidName, setKidName] = useState("");
  const [KidAge, setKidAge] = useState("");
  const [password, setPassword] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  const handleRegister = () => {
    if (TutorAge < 18) {
      alert("El tutor debe ser mayor de edad");
    } else {
      setDoc(doc(db, "users", email.toLowerCase()), {
        name: KidName,
        age: KidAge,
        email: email,
        tutorName: TutorName,
        tutorAge: TutorAge,
      });
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser).then(() => {
            Alert.alert("Verifica tu cuenta a través del correo enviado");
            props.navigation.navigate("Login");
          });
        })
        .catch((error) => {
          const errorMessage = error.message;
          Alert.alert(errorMessage);
        });
    }
  };

  return (
    <KeyboardAwareScrollView>
      <View>
        <View style={{ alignItems: "center", paddingTop: 30 }}>
          <Text style={styles.subtitleUnder}>
            DEBES TENER MAS DE 18 AÑOS PARA REGISTRARTE
          </Text>
        </View>

        <View style={{ paddingTop: 30 }}>
          <InputBox
            inputTitle="Email"
            inputValue={email}
            inputSet={(text) => setEmail(text)}
          />
          <InputBox
            inputTitle="Nombre del tutor"
            inputValue={TutorName}
            inputSet={(text) => setTutorName(text)}
          />
          <InputBox
            inputTitle="Edad del tutor"
            inputValue={TutorAge}
            inputSet={(text) => setTutorAge(text)}
          />
          <InputBox
            inputTitle="Nombre del menor"
            inputValue={KidName}
            inputSet={(text) => setKidName(text)}
          />
          <InputBox
            inputTitle="Edad del menor"
            inputValue={KidAge}
            inputSet={(text) => setKidAge(text)}
          />
          <InputBox
            inputTitle="Contraseña"
            inputValue={password}
            inputSet={(text) => setPassword(text)}
          />
        </View>

        <Button textButton="Registrarse" onPress={handleRegister} /> 
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Register;
