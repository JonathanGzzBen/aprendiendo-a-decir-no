import { createStackNavigator } from "@react-navigation/stack";
import {
  Acne,
  EditProfile,
  Hombres,
  Mujeres,
  Introduccion,
  OlvidarContra,
  Login,
  Perfil,
  Pubertad,
  Register,
  Sexualidad,
} from "../../screens/Screens";
import {
  Anticonceptivos_M,
  CambiosFisicos_M,
  Menstruacion,
  Higiene_M,
} from "../../screens/Mujeres/ScreensM";
import {
  Anticonceptivos_H,
  CambiosFisicos_H,
  Ereccion,
  Humedos,
} from "../../screens/Hombres/ScreensH";
import MyDrawer from "./MyDrawer";
import React from "react";

const Stack = createStackNavigator();

const AuthStack = () => {
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
        name="OlvidarContra"
        component={OlvidarContra}
        options={{
          title: "Reestablecer Contraseña",
          headerStyle: { backgroundColor: "#713C6A" },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          title: "Editar perfil",
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
};

export default AuthStack;
