import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../style/GeneralStyles";
import { Avatar } from "react-native-elements";

import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../database/firebase";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import ConfigButton from "../components/ConfigButton";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

const Configuracion = ({ navigation }) => {
  const auth = getAuth();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

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
        <ConfigButton
          onPress={() => navigation.navigate("Perfil", { name: "Perfil" })}
          textButton="Perfil"
          firstImage="https://i.imgur.com/A5hSs7b.png"
          secondImage="https://i.imgur.com/8rkJHN0.png"
        />
        <View style={styles.divider}></View>
        <ConfigButton
          onPress={handleSignOut}
          textButton="Cerrar sesión"
          firstImage="https://i.imgur.com/zIXdblu.png"
          secondImage="https://i.imgur.com/8rkJHN0.png"
        />
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

export default Configuracion;
