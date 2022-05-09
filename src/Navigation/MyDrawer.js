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
        drawerActiveBackgroundColor: '#713C6A',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Inicio}
        options={{
          title: "Inicio",
          headerStyle: { backgroundColor: "#713C6A" },
          headerTintColor: "white",
          drawerIcon: ({ color }) => {
            <Ionicons name="home-outline" size={22} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Women"
        component={Mujeres}
        options={{
          title: "Mujeres",
          headerStyle: { backgroundColor: "#713C6A" },
          headerTintColor: "white",
          drawerIcon: ({ color }) => {
            <Ionicons name="female-outline" size={22} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Men"
        component={Hombres}
        options={{
          title: "Hombres",
          headerStyle: { backgroundColor: "#713C6A" },
          headerTintColor: "white",
          drawerIcon: ({ color }) => {
            <Ionicons name="male-outline" size={22} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Diversity"
        component={Inclusion}
        options={{
          title: "Inclusión",
          headerStyle: { backgroundColor: "#713C6A" },
          headerTintColor: "white",
          drawerIcon: ({ color }) => {
            <Ionicons name="heart-circle-outline" size={22} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Contact"
        component={Contacto}
        options={{
          title: "Contacto",
          headerStyle: { backgroundColor: "#713C6A" },
          headerTintColor: "white",
          drawerIcon: ({ color }) => {
            <Ionicons name="mail-outline" size={22} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Configuracion}
        options={{
          title: "Configuración",
          headerStyle: { backgroundColor: "#713C6A" },
          headerTintColor: "white",
          drawerIcon: ({ color }) => {
            <Ionicons name="cog-outline" size={22} color={color} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
