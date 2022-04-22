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
        text="Pubertad es el momento de la vida cuando un niño o una niña madura sexualmente. Es un proceso que suele ocurrir entre los 10 y 14 años para las niñas y entre los 12 y 16 para los varones. Causa cambios físicos y afecta a niños y niñas de manera distinta."
      />
      <View style={styles.container}>
        <View style={styles.row}>
          <CardButton
            buttonImage="https://i.imgur.com/EJFR6lQ.png"
            buttonText="Pubertad en hombres"
            onPress={() =>
              navigation.navigate("CambiosFisicos_H", {
                name: "CambiosFisicos_H",
              })
            }
          />
          <CardButton
            buttonImage="https://i.imgur.com/PiHS7Xv.png"
            buttonText="Pubertad en mujeres"
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
