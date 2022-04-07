import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import Info from "../../components/Info";

const Higiene_F = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <Info
        title="¿Cómo limpio mi vagina y vulva?"
        image="https://i.imgur.com/IU6GdTwl.jpg"
        text="La mejor manera de limpiar tu vulva es lavar las partes externas con agua y jabón neutro. Nunca introduzcas jabones ni otros limpiadores dentro de tu vagina. No necesitas lavar el interior de tu vagina, pues ¡se limpia sola!
        "
      />
      <Image
        source={require("../../src/img/divider.png")}
        style={styles.divider}
      />

      <Info
        title="También debes saber que"
        image="https://i.imgur.com/dK1SSjTl.png"
        text="Es normal que tu vagina y flujo vaginal tengan un olor leve, aún cuando está limpia. De modo que no necesitas usar duchas, desodorantes vaginales, sprays u otros productos de higiene femenina.
        "
      />

      <View style={styles.container}>
        <Text style={styles.subtitle}>
          De hecho, usar duchas vaginales y utilizar productos de “higiene
          femenina” puede causar irritación e infecciones.{"\n"}
        </Text>
      </View>
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
  divider: {
    width: "100%",
    height: 50,
  },
  item: {
    padding: 10,
    fontSize: 14,
    letterSpacing: 1.3,
    paddingTop: 15,
  },
  listContainer: {
    flex: 1,
    width: "100%",
  },
});

export default Higiene_F;
