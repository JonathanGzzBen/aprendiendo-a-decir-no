import React from "react";
import { View, ScrollView } from "react-native";
import CardButton from "../components/CardButton";
import Info from "../components/Info";
import styles from "../style/GeneralStyles";

const Pubertad = ({ navigation }) => {
  return (
    <ScrollView style={styles.safeContainer}>
      <Info
        title="¿Qué es la pubertad?"
        image="https://i.imgur.com/Yrm2xC9.png"
        text="Decir NO, debe ser algo sencillo y fácil de decir y debe ser respetado, si no es respetado no dudes en gritar, irte de ahi o actuar de manera defensiva ya que es un crimen obligar a alguien a algo que no quiere."
      />
      <View style={styles.container}>
        <View style={styles.row}>
          <CardButton
            buttonImage="https://i.imgur.com/EJFR6lQ.png"
            buttonText="Cuidados en hombres"
            onPress={() =>
              navigation.navigate("CambiosFisicos_H", {
                name: "CambiosFisicos_H",
              })
            }
          />
          <CardButton
            buttonImage="https://i.imgur.com/PiHS7Xv.png"
            buttonText="Cuidados en mujeres"
            onPress={() =>
              navigation.navigate("CambiosFisicos_M", {
                name: "CambiosFisicos_M",
              })
            }
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Pubertad;
