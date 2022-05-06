import { View, StyleSheet, Image } from "react-native";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import styles from "../style/GeneralStyles";
import React, { useState } from "react";

import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../database/firebase";

const OlvidarContra = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const forgotPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        navigation.replace("Login");
        alert("Verifica tu email para reestablecer tu contraseña.");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Ingresa un email existente, intenta de nuevo.");
      });
  };

  return (
    <View  style={styles.safeContainer}>
      <View style={styles.forgot}>
        <InputBox
          inputTitle="Ingresa tu correo electrónico de tu cuenta"
          inputValue={email}
          inputSet={(text) => setEmail(text)}
        />
        <Button onPress={forgotPassword} textButton="Reestablecer contraseña" />
      </View>
    </View>
  );
};

export default OlvidarContra;
