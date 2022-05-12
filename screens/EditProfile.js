import React, { useState, useContext } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../database/firebase";
import { getFirestore, updateDoc, doc } from "firebase/firestore";
import { UserContext } from "../context/UserContext";
import Button from "../components/Button";

const EditProfile = ({ navigation, route }) => {
  const [user, setUser] = useContext(UserContext);
  const [email, setEmail] = useState(route.params.user.email);
  const [tutorName, setTutorName] = useState(route.params.user.tutorName);
  const [tutorAge, setTutorAge] = useState(route.params.user.tutorAge);
  const [name, setName] = useState(route.params.user.name);
  const [age, setAge] = useState(route.params.user.age);

  const editUser = route.params.user;

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore();

  const handleUpdate = async () => {
    await updateDoc(doc(db, "users", email), {
      age: age,
      email: email,
      name: name,
      tutorAge: tutorAge,
      tutorName: tutorName,
    })
      .then(() => {
        Alert.alert("Información actualizada exitosamente.");
        setUser({
          ...user,
          age: age,
          email: email,
          name: name,
          tutorAge: tutorAge,
          tutorName: tutorName,
        });
        navigation.goBack();
      })
      .catch((error) => {
        Alert.alert("Edición fallida.");
      });
  };

  return (
    <ScrollView>
      <View>
        <View style={styles.container}></View>

        <View style={{ padding: 30 }}>
          <Text style={styles.Data}>Email</Text>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#666666"
            autoCorrect={true}
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <Text style={styles.Data}>Nombre del tutor</Text>
          <TextInput
            placeholder="Nombre tutor"
            placeholderTextColor="#666666"
            autoCorrect={true}
            style={styles.input}
            value={tutorName}
            onChangeText={(text) => setTutorName(text)}
          />

          <Text style={styles.Data}>Edad del tutor</Text>
          <TextInput
            placeholder="Edad tutor"
            placeholderTextColor="#666666"
            autoCorrect={true}
            keyboardType="numeric"
            style={styles.input}
            value={tutorAge}
            onChangeText={(text) => setTutorAge(text)}
          />

          <Text style={styles.Data}>Nombre del menor</Text>
          <TextInput
            placeholder="Nombre menor"
            placeholderTextColor="#666666"
            autoCorrect={true}
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
          />

          <Text style={styles.Data}>Edad del menor</Text>
          <TextInput
            placeholder="Edad menor"
            placeholderTextColor="#666666"
            autoCorrect={true}
            keyboardType="numeric"
            style={styles.input}
            value={age}
            onChangeText={(text) => setAge(text)}
          />
        </View>
        <Button onPress={handleUpdate} textButton="Actualizar información" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 30,
  },
  Data: {
    paddingLeft: 20,
    fontSize: hp("2.2%"),
    fontWeight: "bold",
  },
  input: {
    width: wp("91%"),
    height: hp("5.5%"),
    margin: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "#713C6A",
  },
});

export default EditProfile;
