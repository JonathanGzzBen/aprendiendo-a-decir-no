 import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Acne, Configuracion, Contacto, Hombres, Mujeres, Inclusion, Inicio, Introduccion, Perfil, Pubertad, Register, Sexualidad, } from "./screens/Screens";

import {Anticonceptivos_M, CambiosFisicos_M, Menstruacion, Higiene_M} from './screens/Mujeres/ScreensM'
import {Anticonceptivos_H, CambiosFisicos_H, Ereccion, Humedos} from './screens/Hombres/ScreensH'

import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./database/firebase";
import { getFirestore, getDoc, doc } from "firebase/firestore";

import { useEffect, useState } from "react";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
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

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: "Iniciar sesión",
          headerStyle: { backgroundColor: "#713C6A" },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: "Registrarse",
          headerStyle: { backgroundColor: "#713C6A" },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="Inicio"
        component={MyDrawer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Introduccion"
        component={Introduccion}
        options={{
          title: "Introducción",
          headerStyle: { backgroundColor: "#713C6A" },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="Pubertad"
        component={Pubertad}
        options={{
          title: "Pubertad",
          headerStyle: { backgroundColor: "#713C6A" },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="Sexualidad"
        component={Sexualidad}
        options={{
          title: "Sexualidad",
          headerStyle: { backgroundColor: "#713C6A" },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="Mujeres"
        component={Mujeres}
        options={{
          title: "Mujeres",
          headerStyle: { backgroundColor: "#713C6A" },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="CambiosFisicos_M"
        component={CambiosFisicos_M}
        options={{
          title: "Cambios Fisicos en Mujeres",
          headerStyle: { backgroundColor: "#713C6A" },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="Menstruacion"
        component={Menstruacion}
        options={{
          title: "Menstruación",
          headerStyle: { backgroundColor: "#713C6A" },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="Higiene_M"
        component={Higiene_M}
        options={{
          title: "Higiene",
          headerStyle: { backgroundColor: "#713C6A" },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="Anticonceptivos_M"
        component={Anticonceptivos_M}
        options={{
          title: "Métodos anticonceptivos para las Mujeres",
          headerStyle: { backgroundColor: "#713C6A" },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="Hombres"
        component={Hombres}
        options={{
          title: "Hombres",
          headerStyle: { backgroundColor: "#713C6A" },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="CambiosFisicos_H"
        component={CambiosFisicos_H}
        options={{
          title: "Cambios Fisicos en Hombres",
          headerStyle: { backgroundColor: "#713C6A" },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="Acne"
        component={Acne}
        options={{
          title: "Acné",
          headerStyle: { backgroundColor: "#713C6A" },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="Ereccion"
        component={Ereccion}
        options={{
          title: "Erecciones",
          headerStyle: { backgroundColor: "#713C6A" },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="Humedos"
        component={Humedos}
        options={{
          title: "Sueños húmedos",
          headerStyle: { backgroundColor: "#713C6A" },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="Anticonceptivos_H"
        component={Anticonceptivos_H}
        options={{
          title: "Metodos anticonceptivos para Hombres",
          headerStyle: { backgroundColor: "#713C6A" },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="Perfil"
        component={Perfil}
        options={{
          title: "Perfil",
          headerStyle: { backgroundColor: "#713C6A" },
          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Inicio"
      drawerContent={(props) => <Menu {...props} />}
    >
      <Drawer.Screen
        name="Inicio"
        component={Inicio}
        options={{
          title: "Inicio",
          headerStyle: { backgroundColor: "#713C6A" },
          headerTintColor: "white",
        }}
      />
      <Drawer.Screen
        name="Mujeres"
        component={Mujeres}
        options={{
          title: "Mujeres",
          headerStyle: { backgroundColor: "#713C6A" },
          headerTintColor: "white",
        }}
      />
      <Drawer.Screen
        name="Hombres"
        component={Hombres}
        options={{
          title: "Hombres",
          headerStyle: { backgroundColor: "#713C6A" },
          headerTintColor: "white",
        }}
      />
      <Drawer.Screen
        name="Inclusion"
        component={Inclusion}
        options={{
          title: "Inclusión",
          headerStyle: { backgroundColor: "#713C6A" },
          headerTintColor: "white",
        }}
      />
      <Drawer.Screen
        name="Contacto"
        component={Contacto}
        options={{
          title: "Contacto",
          headerStyle: { backgroundColor: "#713C6A" },
          headerTintColor: "white",
        }}
      />
      <Drawer.Screen
        name="Configuración"
        component={Configuracion}
        options={{
          title: "Configuración",
          headerStyle: { backgroundColor: "#713C6A" },
          headerTintColor: "white",
        }}
      />
    </Drawer.Navigator>
  );
}

function Menu(props) {
  return (
    <View style={s.container}>
      <View style={s.bgContainer}>
        <TouchableOpacity>
          <View style={s.userContainer}>
            <Image
              style={s.userImagen}
              source={require("./src/img/user.png")}
            />
          </View>
          <View style={s.userNombre}>
            <Text style={s.userTitulo}>{Name()}</Text>
            <Text style={s.userSubTitulo}>{Age() + " años"}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <DrawerItemList {...props} />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
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
