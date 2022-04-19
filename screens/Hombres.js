import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import ImageButtonMH from "../components/ImageButtonMH";
import styles from "../style/GeneralStyles";

const Hombres = ({ navigation }) => {
  return (
    <ScrollView style={styles.safeContainer}>
      <View style={styles.container}>
        <Image
          source={{uri: 'https://i.imgur.com/9Ar5PzF.png'}}
          style={styles.mainImageStyle}
        />
        <Text style={styles.title}>Información sobre el hombre</Text>
        <ImageButtonMH
          buttonImage="https://i.imgur.com/Lb067xH.png"
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
