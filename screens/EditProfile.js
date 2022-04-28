import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../database/firebase";
import { getFirestore, updateDoc, doc } from "firebase/firestore";

const EditProfile = ({ navigation }) => {
  const [userData, setUserData] = useState(null);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore();

  const handleUpdate = async() => {
    await updateDoc(doc(db, "users", userData.email), {
      age: userData.age,
      email: userData.email,
      name: userData.name,
      tutorAge: userData.tutorAge,
      tutorName: userData.tutorName,
    })
      .then(() => {
        console.log("Editado");
        Alert.alert("Información actualizada exitosamente.");
        navigation.goBack();
      })
      .catch((error) => {
        console.log("Error");
        Alert.alert("Edición fallida.");
      });
  };

  return (
    <ScrollView>
      <View>
        <View style={{ alignItems: "center", padding: 30 }}></View>

        <View style={{ padding: 30 }}>
          <Text style={styles.Data}>Email</Text>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.input}
            value={userData ? userData.email : ""}
            onChangeText={(text) => setUserData({ ...userData, email: text })}
          />

          <Text style={styles.Data}>Nombre del tutor</Text>
          <TextInput
            placeholder="Nombre tutor"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.input}
            value={userData ? userData.tutorName : ""}
            onChangeText={(text) =>
              setUserData({ ...userData, tutorName: text })
            }
          />

          <Text style={styles.Data}>Edad del tutor</Text>
          <TextInput
            placeholder="Edad tutor"
            placeholderTextColor="#666666"
            autoCorrect={false}
            keyboardType="numeric"
            style={styles.input}
            value={userData ? userData.tutorAge : ""}
            onChangeText={(text) =>
              setUserData({ ...userData, tutorAge: text })
            }
          />

          <Text style={styles.Data}>Nombre del menor</Text>
          <TextInput
            placeholder="Nombre menor"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.input}
            value={userData ? userData.name : ""}
            onChangeText={(text) => setUserData({ ...userData, name: text })}
          />

          <Text style={styles.Data}>Edad del menor</Text>
          <TextInput
            placeholder="Edad menor"
            placeholderTextColor="#666666"
            autoCorrect={false}
            keyboardType="numeric"
            style={styles.input}
            value={userData ? userData.age : ""}
            onChangeText={(text) => setUserData({ ...userData, age: text })}
          />
        </View>
        <TouchableOpacity onPress={handleUpdate} style={styles.button}>
          <Text style={styles.textButton}>Actualizar información</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  Images: {
    height: 125,
    width: 125,
    alignSelf: "center",
  },
  SubTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textDecorationLine: "underline",
    textAlign: "center",
    margin: 20,
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
  button: {
    backgroundColor: "#713C6A",
    padding: 10,
    alignSelf: "center",
    borderRadius: 15,
    margin: 30,
    paddingLeft: 40,
    paddingRight: 40,
  },
  textButton: {
    color: "white",
    fontSize: 20,
  },
});

export default EditProfile;
