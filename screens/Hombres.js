import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import ImageButtonMH from "../components/ImageButtonMH";
import styles from "../style/GeneralStyles";

const Hombres = ({ navigation }) => {
  return (
    <ScrollView style={styles.safeContainer}>
      <View style={styles.container}>
        <Image
          source={{ uri: "https://i.imgur.com/OM3z33J.png" }}
          style={styles.mainImageStyle}
        />
        <Text style={styles.title}>Información sobre el hombre</Text>
        <ImageButtonMH
          buttonImage="https://i.imgur.com/FbWNz3z.png"
          buttonTitle="Cambios fisícos"
          buttonText="¿Qué ocurre en el cuerpo del hombre al llegar a la pubertad?"
          onPress={() =>
            navigation.navigate("CambiosFisicos_H", {
              name: "CambiosFisicos_H",
            })
          }
        />
        <ImageButtonMH
          buttonImage="https://i.imgur.com/Mj0cVW2.png"
          buttonTitle="Métodos anticonceptivos"
          buttonText="¿Cuáles son algunos de los métodos anticonceptivos que usa el hombre?"
          onPress={() =>
            navigation.navigate("Anticonceptivos_H", {
              name: "Anticonceptivos_H",
            })
          }
        />
      </View>
    </ScrollView>
  );
};

export default Hombres;
