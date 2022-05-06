import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, Image, Alert } from "react-native";
import Button from "../components/Button";
import styles from "../style/GeneralStyles";
import box from "../style/InputBox.component.style";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../database/firebase";
import { useNavigation } from "@react-navigation/native";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const navigation = useNavigation();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        props.navigation.replace("Inicio", { user: email });
      })
      .catch((error) => {
        Alert.alert("Credenciales incorrectas");
      });
  };

  return (
    <ScrollView style={styles.safeContainer}>
      <View>
        <Image
          style={styles.mainImageLogin}
          source={{ uri: "https://i.imgur.com/cKrEKpU.jpg" }}
        />
        <View style={{ alignItems: "center", paddingTop: 30 }}>
          <Text style={styles.title}>¡Bienvenido de vuelta!</Text>
        </View>

        <View style={{ paddingTop: 30 }}>
          <Text style={box.inputTitle}>Email</Text>
          <TextInput
            style={box.inputBox}
            value={email}
            onChangeText={(text) => setEmail(text)}
            importantForAutofill='yes'
            autoCompleteType='email'
          />
          <Text style={box.inputTitle}>Contraseña</Text>
          <TextInput
            style={box.inputBox}
            value={password}
            onChangeText={(text) => setPassword(text)}
            importantForAutofill='yes'
            secureTextEntry={true}
          />
        </View>

        <View style={styles.linkRecoverContainer}>
          <Text
            style={styles.linkText}
            onPress={() => props.navigation.navigate("OlvidarContra")}
          >
            Olvidé mi contraseña
          </Text>
        </View>

        <Button textButton="Ingresar" onPress={handleLogin} />

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>
            ¿No tienes cuenta?{" "}
            <Text
              style={styles.registerLink}
              onPress={() => props.navigation.navigate("Register")}
            >
              Regístrate
            </Text>{" "}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
