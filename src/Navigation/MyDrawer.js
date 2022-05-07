import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import CustomDrawer from "./CustomDrawer";

import {
  Hombres,
  Mujeres,
  Inicio,
  Inclusion,
  Contacto,
  Configuracion
} from "../../screens/Screens";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Home"
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
};

export default MyDrawer;
