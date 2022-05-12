import React, { useState, useContext } from "react";
import { View, Text, TextInput, Image, Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { UserContext } from "../context/UserContext";

import Button from "../components/Button";
import styles from "../style/GeneralStyles";
import box from "../style/InputBox.component.style";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../database/firebase";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";


const Login = (props) => {
  const [user, setUser] = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore();
  const navigation = useNavigation();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        props.navigation.replace("Inicio", { user: email });

        const getUserById = async (id) => {
          const docRef = doc(db, "users", id);
          const docSnap = await getDoc(docRef);
          const user1 = docSnap.data();
          if (docSnap.exists()) {
            setUser({
              ...user1,
            });
          } else {
            console.log("No such document!");
          }
        };

        getUserById(email);
      })
      .catch((error) => {
        Alert.alert("Credenciales incorrectas");
      });
  };

  return (
    <KeyboardAwareScrollView
      style={styles.safeContainer}
      resetScrollToCoords={{ x: 0, y: 0 }}
    >
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
            autoComplete="email"
            autoCorrect
          />
          <Text style={box.inputTitle}>Contraseña</Text>
          <TextInput
            style={box.inputBox}
            value={password}
            onChangeText={(text) => setPassword(text)}
            autoComplete="password"
            autoCorrect
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
    </KeyboardAwareScrollView>
  );
};

export default Login;
