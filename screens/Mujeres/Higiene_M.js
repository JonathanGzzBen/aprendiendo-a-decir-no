import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";
import Info from "../../components/Info";
import styles from "../../style/GeneralStyles";

const Higiene_F = () => {
  return (
    <ScrollView style={styles.safeContainer}>
      <Info
        title="¿Cómo limpio mi vagina y vulva?"
        image="https://i.imgur.com/IU6GdTwl.jpg"
        text="La mejor manera de limpiar tu vulva es lavar las partes externas con agua y jabón neutro. Nunca introduzcas jabones ni otros limpiadores dentro de tu vagina. No necesitas lavar el interior de tu vagina, pues ¡se limpia sola!
        "
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

export default Higiene_F;
