import { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-elements";

import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../database/firebase";
import { getFirestore, getDoc, doc } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

const Configuracion = ({ navigation }) => {
  const auth = getAuth();
  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      navigation.replace("Login")
    })
    .catch(error => alert(error.message))
  }

  return (
    <ScrollView style={styles.safeContainer}>
      <View style={styles.container}>
        <Avatar
          rounded
          size={200}
          source={{ uri: "https://i.imgur.com/K4DfE5S.jpg" }}
          containerStyle={{ margin: 20, alignSelf: "center" }}
        />
        <Text style={styles.title}>{Name()}</Text>
        <View style={styles.divider}></View>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Perfil", { name: "Perfil" })}
        >
          <Image
            source={{uri: 'https://i.imgur.com/A5hSs7b.png'}}
            style={styles.buttonImageIconStyle}
          />
          <View syle={styles.containerText}>
            <Text style={styles.buttonTitleStyle}>Perfil</Text>
          </View>
          <Image
            source={{uri: 'https://i.imgur.com/8rkJHN0.png'}}
            style={styles.buttonImageIconStyle}
          />
        </TouchableOpacity>

        <View style={styles.divider}></View>
        <TouchableOpacity
          style={styles.buttonBottomStyle}
          onPress={handleSignOut}
          activeOpacity={0.5}
        >
          <Image
            source={{uri: "https://i.imgur.com/zIXdblu.png"}}
            style={styles.buttonImageIconStyle}
          />
          <View syle={styles.containerText}>
            <Text style={styles.buttonTitleStyle}>Cerrar sesión</Text>
          </View>
          <Image
            source={{uri: 'https://i.imgur.com/8rkJHN0.png'}}
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
    height: '100%'
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
    height: "10%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonBottomStyle: {
    height: "20%",
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
