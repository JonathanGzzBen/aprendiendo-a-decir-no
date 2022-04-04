import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";

const Ereccion = () => {
  return (
    <ScrollView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>¿Qué es una erección?</Text>
        <Text style={styles.textStyle}>
          Una erección ocurre cuando el pene se llena de sangre y se pone
          rígido. El pene se agranda y sobresale del cuerpo. Al llegar a la
          pubertad, los niños comenzarán a notar que las erecciones ocurren más
          a menudo. Y son perfectamente normales.
        </Text>
        <Image
          source={require("../../src/img/Hombres/ereccion.jpg")}
          style={styles.mainImageStyle}
        />
        <Text style={styles.textStyle}>
          Una erección puede ocurrir en cualquier momento. Puedes tener muchas
          en un día o ninguna. Esto depende de la edad, la madurez sexual, el
          nivel de actividad e incluso de la cantidad de horas que duermas.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 10,
    margin: 10,
    padding: 30,
    alignItems: "center",
    textAlign: "center",
  },
  safeContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  textStyle: {
    fontSize: 14,
    flex: 0.2,
    fontStyle: "normal",
    paddingTop: 15,
    letterSpacing: 1.3,
    textAlign: "justify",
    width: "100%",
  },
  mainImageStyle: {
    width: 175,
    height: 250,
    margin: 15,
  },
});

export default Ereccion;
