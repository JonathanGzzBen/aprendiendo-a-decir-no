import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import ImageButtonMH from "../components/ImageButtonMH";
import styles from "../style/GeneralStyles";

const Mujeres = ({ navigation }) => {
  return (
    <ScrollView style={styles.safeContainer}>
      <View style={styles.container}>
        <Image
          style={styles.mainImageStyle}
          source={require("../src/img/mujeres.jpg")}
        />
        <Text style={styles.title}>Información sobre la mujer</Text>
        <ImageButtonMH
          buttonImage="https://i.imgur.com/Eq7pGWe.jpg"
          buttonTitle="Cambios fisícos"
          buttonText="¿Qué ocurre en el cuerpo de la mujer al llegar a la pubertad?"
          onPress={() =>
            navigation.navigate("CambiosFisicos_M", {
              name: "CambiosFisicos_M",
            })
          }
        />
        <ImageButtonMH
          buttonImage="https://i.imgur.com/HHbVl59.png"
          buttonTitle="Métodos anticonceptivos"
          buttonText="¿Cuáles son algunos de los métodos anticonceptivos que usa la mujer?"
          onPress={() =>
            navigation.navigate("Anticonceptivos_M", {
              name: "Anticonceptivos_M",
            })
          }
        />
      </View>
    </ScrollView>
  );
};

export default Mujeres;
