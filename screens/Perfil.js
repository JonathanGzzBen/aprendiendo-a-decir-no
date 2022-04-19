import { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../database/firebase";
import { getFirestore, getDoc, doc } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

const Perfil = () => {
  return (
    <ScrollView style={s.safeContainer}>
      <View style={s.container}>
        <View style={s.bgContainer}>
          <TouchableOpacity>
            <View style={s.userContainer}>
              <Image
                style={s.userImagen}
                source={require("../src/img/user.png")}
              />
            </View>
            <View style={s.userNombre}>
              <Text style={s.userTitulo}>{Name()}</Text>
              <Text style={s.userSubTitulo}>{Age() + " años"}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Text style={s.title}>Tu información</Text>
        <Text style={s.camp}>
          Email <Text style={s.res}>{Email()}</Text>
        </Text>
        <Text style={s.camp}>
          Nombre del tutor <Text style={s.res}>{TutorName()}</Text>
        </Text>
        <Text style={s.camp}>
          Edad del tutor <Text style={s.res}>{TutorAge() + " años"}</Text>
        </Text>
        <Text style={s.camp}>
          Nombre del menor <Text style={s.res}>{Name()}</Text>
        </Text>
        <Text style={s.camp}>
          Edad del menor <Text style={s.res}>{Age() + " años"}</Text>
        </Text>
      </View>
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
      console.log("HOla");
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
      console.log("HOla");
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
      console.log("HOla");
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
      console.log("HOla");
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
    fontSize: 15,
    paddingLeft: 20,
    paddingBottom: 20,
    fontWeight: "bold",
  },

  res: {
    fontSize: 15,
    paddingLeft: 20,
    color: "#989898",
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
    fontSize: 16,
  },

  userSubTitulo: {
    textAlign: "center",
    fontSize: 11,
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
