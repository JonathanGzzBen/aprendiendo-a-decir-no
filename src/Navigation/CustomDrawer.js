import { View, Text, Image } from "react-native";
import styles from "../../style/CustomDrawer.style";
import {
  DrawerItemList,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { useEffect, useState } from "react";

import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../database/firebase";
import { getFirestore, getDoc, doc } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

const CustomDrawer = (props) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.drawerContainer}
      >
        <View style={styles.profileContainer}>
          <Image
            style={styles.avatar}
            source={{ uri: "https://i.imgur.com/K4DfE5S.jpg" }}
          />
          <Text style={styles.title}>{Name()}</Text>
          <Text style={styles.subtitle}>{Age() + " años"}</Text>
        </View>
        <View style={styles.itemContainer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

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

export default CustomDrawer;
