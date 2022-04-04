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

const Humedos = () => {
  return (
    <ScrollView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>¿Qué es un sueño húmedo?</Text>
        <Image
          source={require("../../src/img/Hombres/dreams.jpg")}
          style={styles.mainImageStyle}
        />
        <Text style={styles.textStyle}>
          Un sueño húmedo es cuando el semen (el líquido que contiene esperma)
          es despedido del pene mientras un niño duerme.
        </Text>
        <Text style={styles.textStyle}>
          El semen es liberado a través de la uretra, es decir, el mismo
          conducto por donde sale la orina (pis). Esto se denomina eyaculación.
        </Text>
      </View>
      <Image
        source={require("../../src/img/divider.png")}
        style={styles.divider}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Sueños húmedos</Text>
        <Image
          source={require("../../src/img/Hombres/humedos.jpg")}
          style={styles.mainImageStyle}
        />
        <Text style={styles.textStyle}>
          Una erección puede producirse incluso cuando duermes. Algunas veces,
          es posible que te despiertes y tu ropa interior o la cama estén
          mojadas. Tal vez te preocupes porque esto significa que mojaste la
          cama como cuando eras pequeño, pero es probable que hayas tenido una
          emisión nocturna o "sueño húmedo".
        </Text>
        <Text style={styles.subtitle}>
          Los sueños húmedos ocurren cuando el cuerpo de un niño comienza a
          producir más testosterona.
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
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "justify",
    width: "100%",
    marginTop: 15,
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
    width: "100%",
    height: 250,
    margin: 15,
  },
  divider: {
    width: "100%",
    height: 50,
  },
});

export default Humedos;
