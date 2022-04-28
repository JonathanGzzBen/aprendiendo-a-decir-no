import { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-elements";
import Button from "../components/Button";

import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../database/firebase";
import { getFirestore, getDoc, doc } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

const Perfil = ({ navigation }) => {
  const updateInfo = () => {
    navigation.navigate("EditProfile", { name: "EditProfile" });
  };

  return (
    <ScrollView style={s.safeContainer}>
      <View style={s.container}>
        <View style={s.bgContainer}>
          <TouchableOpacity>
            <View style={s.userContainer}>
              <Avatar
                rounded
                size="xlarge"
                source={{ uri: "https://i.imgur.com/K4DfE5S.jpg" }}
                containerStyle={{ margin: 20, alignSelf: "center" }}
              />
            </View>
            <View style={s.userNombre}>
              <Text style={s.userTitulo}>{Name()}</Text>
              <Text style={s.userSubTitulo}>{Age() + " años"}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={s.infoContainer}>
        <Text style={s.title}>Tu información</Text>
        <View style={s.textContainer}>
          <Text style={s.camp}>Correo electrónico</Text>
          <Text style={s.res}>{Email()}</Text>
        </View>
        <View style={s.textContainer}>
          <Text style={s.camp}>Nombre del tutor</Text>
          <Text style={s.res}>{TutorName()}</Text>
        </View>
        <View style={s.textContainer}>
          <Text style={s.camp}>Edad del tutor</Text>
          <Text style={s.res}>{TutorAge() + " años"}</Text>
        </View>
        <View style={s.textContainer}>
          <Text style={s.camp}>Nombre del menor</Text>
          <Text style={s.res}>{Name()}</Text>
        </View>
        <View style={s.textContainer}>
          <Text style={s.camp}>Edad del menor</Text>
          <Text style={s.res}>{Age() + " años"}</Text>
        </View>
      </View>
      <Button onPress={updateInfo} textButton="Editar información" />
    </ScrollView>
  );
};

function Email() {
  const actualUser = auth.currentUser;
  return actualUser.email;
}

function TutorName() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    tutorName: "",
    tutorAge: "",
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

  return user.tutorName;
}

function TutorAge() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    tutorName: "",
    tutorAge: "",
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

  return user.tutorAge;
}

function Name() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    tutorName: "",
    tutorAge: "",
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

function Age() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    tutorName: "",
    tutorAge: "",
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

  return user.age;
}

const s = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },

  safeContainer: {
    flex: 1,
    backgroundColor: "white",
  },

  infoContainer: {
    flex: 1,
    padding: 15,
    marginRight: 20,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bgContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#A0A0A0",
  },

  userContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },

  userImagen: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  title: {
    fontSize: 20,
    padding: 20,
    fontWeight: "bold",
  },

  camp: {
    fontSize: 14,
    paddingLeft: 20,
    paddingBottom: 20,
    fontWeight: "bold",
  },

  res: {
    fontSize: 14,
    paddingLeft: 20,
    fontWeight: "bold",
    color: "#666666",
    textAlign: "justify",
  },

  camaraContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  camaraIcon: {
    width: 20,
    height: 20,
    position: "absolute",
    left: 15,
    bottom: 3,
  },

  userNombre: {
    marginVertical: 10,
  },

  userTitulo: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },

  userSubTitulo: {
    textAlign: "center",
    fontSize: 16,
    color: "#713C6A",
    paddingVertical: 5,
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 10,
    marginVertical: 15,
  },

  iconoContainer: {
    flex: 1.5,
    justifyContent: "center",
  },

  tituloContainer: {
    flex: 8.5,
    justifyContent: "center",
  },

  tituloTxt: {
    fontSize: 13,
  },
  difuminado: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  fondoImagen: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
});

export default Perfil;
