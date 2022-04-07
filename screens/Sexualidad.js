import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import Info from "../components/Info";
import Divider from "../components/Divider";

const Sexualidad = () => {
  const [info, setInfo] = useState([
    {
      titulo: "Sexualidad consentida",
      imagen: "https://i.imgur.com/iQlUbLp.png",
      texto: "La sexualidad consentida se refiere a el derecho de poder elegir si quieres tener cualquier tipo de actividad sexual, esto significa que en cualquier momento y con cualquier persona puedes cambiar de opinion y decir que no, esto debe ser respetado por la otra persona.",
      key: 1,
    },
    {
      titulo: "DECIR NO",
      imagen: "https://i.imgur.com/FNiFCQm.png",
      texto: "DECIR NO, debe ser algo sencillo y facil de decir y debe ser respetado, si no es respetado no dudes en gritar, irte de ahi o actuar de manera defensiva ya que es un crimen obligar a alguien a algo que no quiere.",
      key: 2,
    },
    {
      titulo: "¿Cuando DECIR NO?",
      imagen: "https://i.imgur.com/hS08Xoc.png",
      texto: "No existe una situación o momento en la que pierdas tu derecho a decir NO, cuando te sientes incómodo o solo no quieres lo que está pasando, no dudes en decir NO.",
      key: 3,
    },
  ]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      {info.map((item) => {
        return (
          <View>
            <Info title={item.titulo} image={item.imagen} text={item.texto} />
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    margin: 10,
    marginTop: -20,
    padding: 30,
    paddingTop: 0,
    alignItems: "center",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "justify",
    width: "100%",
  },
});

export default Sexualidad;
