import { useEffect, useState } from "react";
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
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../database/firebase";
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  doc,
} from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

const Configuracion = ({navigation}) => {
  return (
    <ScrollView style={styles.safeContainer}>
      <View style={styles.container}>
        <Image
          source={require("../src/img/user.png")}
          style={styles.mainImageStyle}
        />
        <Text style={styles.title}>{Name()}</Text>
        <View style={styles.divider}></View>
        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}
        onPress={() => navigation.navigate('Perfil', {name: 'Perfil'})}>
          <Image
            source={require("../src/img/ninos.png")}
            style={styles.buttonImageIconStyle}
          />
          <View syle={styles.containerText}>
            <Text style={styles.buttonTitleStyle}>Perfil</Text>
          </View>
          <Image
            source={require("../src/img/flecha.png")}
            style={styles.buttonImageIconStyle}
          />
        </TouchableOpacity>

          <View style={styles.divider}></View>
        <TouchableOpacity style={styles.buttonBottomStyle} 
        onPress={() => navigation.navigate('Login', {name: 'Login'})}
        activeOpacity={0.5}>
          <Image
            source={require("../src/img/sesion.png")}
            style={styles.buttonImageIconStyle}
          />
          <View syle={styles.containerText}>
            <Text style={styles.buttonTitleStyle}>Cerrar sesión</Text>
          </View>
          <Image
            source={require("../src/img/flecha.png")}
            style={styles.buttonImageIconStyle}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

function Name() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
  });

  const actualUser = auth.currentUser;

  const getUserById = async (id) => {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    const user = docSnap.data();
    if (docSnap.exists()) {
      setUser({
        ...user,
      });
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getUserById(actualUser.email);
  }, []);

  return user.name;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 15,
    margin: 10,
    padding: 20,
  },
  safeContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  mainImageStyle: {
    width: 150,
    height: 150,
    margin: 20,
    alignSelf: "center",
  },
  buttonStyle: {
    height: "18%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonBottomStyle: {
    height: "18%",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonImageIconStyle: {
    height: 48,
    width: 48,
    resizeMode: "contain",
  },
  buttonTitleStyle: {
    fontWeight: "600",
    fontSize: 20,
    fontStyle: "normal",
    textAlign: "center",
    margin: 15,
  },
  divider: {
    backgroundColor: "#c4c4c4",
    width: "100%",
    height: 2,
    margin: 30,
    alignSelf: "center",
  },
  containerText: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
});

export default Configuracion;
