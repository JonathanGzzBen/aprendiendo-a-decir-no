import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../database/firebase";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        props.navigation.navigate("Inicio", { user: email });
      })
      .catch((error) => {
        Alert.alert("Credenciales incorrectas");
      });
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          style={styles.Images}
          source={require("../src/img/Login.jpeg")}
        />
        <View style={{ alignItems: "center", paddingTop: 30 }}>
          <Text style={styles.SubTitle}>¡Bienvenido de vuelta!</Text>
        </View>

        <View style={{ paddingTop: 30 }}>
          <Text style={styles.Data}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <Text style={styles.Data}>Contraseña</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
        </View>

        <View style={styles.recover}>
          <Text
            style={styles.recoverText}
            onPress={() => Alert.alert("Pantalla para recuperar contra")}
          >
            Olvidé mi contraseña
          </Text>
        </View>

        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.textButton}>Ingresar</Text>
        </TouchableOpacity>

        <View style={styles.register}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    backgroundColor: "#713C6A",
    flex: 0.3,
    justifyContent: "center",
  },
  headerText: {
    fontSize: 23,
    color: "white",
    paddingLeft: 15,
  },
  Images: {
    height: 180,
    width: "100%",
  },
  SubTitle: {
    fontSize: 25,
    fontWeight: "bold",
  },
  Data: {
    paddingLeft: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    margin: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "#713C6A",
  },
  recover: {
    alignItems: "flex-end",
    paddingRight: 10,
  },
  recoverText: {
    color: "#713C6A",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#713C6A",
    padding: 10,
    alignSelf: "center",
    borderRadius: 15,
    marginTop: 30,
    paddingLeft: 40,
    paddingRight: 40,
  },
  textButton: {
    color: "white",
    fontSize: 20,
  },
  register: {
    alignItems: "center",
    marginTop: 30,
  },
  registerText: {
    color: "darkgray",
  },
  registerLink: {
    color: "#713C6A",
  },
});

export default Login;
