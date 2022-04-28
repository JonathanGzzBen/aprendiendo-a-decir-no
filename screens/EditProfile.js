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

const EditProfile = () => {
  const [email, setEmail] = useState("");
  const [TutorName, setTutorName] = useState("");
  const [TutorAge, setTutorAge] = useState("");
  const [KidName, setKidName] = useState("");
  const [KidAge, setKidAge] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore();

  const handleUpdate = () => {
    updateDoc(doc(db, "users", email.toLowerCase()), {
      age: KidAge,
      email: email,
      name: KidName,
      tutorAge: TutorAge,
      tutorName: TutorName,
    })
      .then(() => {
        console.log("Editado");
        alert("Información actualizada exitosamente.");
      })
      .catch((error) => {
        console.log("Error");
        alert("Edición fallida.");
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
            value={email ? email : ''}
            onChangeText={(text) => setEmail(text)}
          />

          <Text style={styles.Data}>Nombre del tutor</Text>
          <TextInput
            style={styles.input}
            value={TutorName}
            onChangeText={(text) => setTutorName(text)}
          />

          <Text style={styles.Data}>Edad del tutor</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            value={TutorAge}
            onChangeText={(text) => setTutorAge(text)}
          />

          <Text style={styles.Data}>Nombre del menor</Text>
          <TextInput
            style={styles.input}
            value={KidName}
            onChangeText={(text) => setKidName(text)}
          />

          <Text style={styles.Data}>Edad del menor</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            value={KidAge}
            onChangeText={(text) => setKidAge(text)}
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
