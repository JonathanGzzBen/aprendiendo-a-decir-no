import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDrawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../../style/CustomDrawer.style";
import React from "react";
import {
  Hombres,
  Mujeres,
  Inicio,
  Inclusion,
  Contacto,
  Configuracion,
} from "../../screens/Screens";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerLabelStyle: styles.drawerLabel,
        drawerActiveBackgroundColor: "#713C6A",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Inicio}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home" size={22} color={color} />
          ),
          title: "Inicio",
          headerStyle: { backgroundColor: "#713C6A" },
          headerTintColor: "white",
        }}
      />
      <Drawer.Screen
        name="Women"
        component={Mujeres}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="female" size={22} color={color} />
          ),
          title: "Mujeres",
          headerStyle: { backgroundColor: "#713C6A" },
          headerTintColor: "white",
        }}
      />
      <Drawer.Screen
        name="Men"
        component={Hombres}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="male" size={22} color={color} />
          ),
          title: "Hombres",
          headerStyle: { backgroundColor: "#713C6A" },
          headerTintColor: "white",
        }}
      />
      <Drawer.Screen
        name="Diversity"
        component={Inclusion}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="heart-circle" size={22} color={color} />
          ),
          title: "Inclusión",
          headerStyle: { backgroundColor: "#713C6A" },
          headerTintColor: "white",
        }}
      />
      <Drawer.Screen
        name="Contact"
        component={Contacto}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="mail" size={22} color={color} />
          ),
          title: "Contacto",
          headerStyle: { backgroundColor: "#713C6A" },
          headerTintColor: "white",
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Configuracion}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="cog" size={22} color={color} />
          ),
          title: "Configuración",
          headerStyle: { backgroundColor: "#713C6A" },
          headerTintColor: "white",
        }}
      />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
