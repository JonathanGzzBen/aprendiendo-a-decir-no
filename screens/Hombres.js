import React, { useState } from "react";
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

const Hombres = () => {
  return (
    <ScrollView style={styles.safeContainer}>
      <View style={styles.container}>
        <Image
          source={require("../src/img/hombres.png")}
          style={styles.mainImageStyle}
        />
        <Text style={styles.title}>Información sobre el hombre</Text>
        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
          <Image
            source={require("../src/img/ninio.png")}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.containerText}>
            <Text style={styles.buttonTitleStyle} numberOfLines={5}>
              Cambios fisícos{"\n"}
              <Text style={styles.buttonTextStyle}>
                ¿Qué ocurre en el cuerpo del hombre al llegar a la pubertad?{" "}
              </Text>
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
          <Image
            source={require("../src/img/anti_hombres.png")}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.containerText}>
            <Text style={styles.buttonTitleStyle} numberOfLines={5}>
              Métodos anticonceptivos{"\n"}
              <Text style={styles.buttonTextStyle}>
                ¿Qué ocurre en el cuerpo del hombre al llegar a la pubertad?{" "}
              </Text>
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 15,
    margin: 10,
    padding: 20,
    alignItems: "center",
  },
  safeContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  mainImageStyle: {
    width: '100%',
    height: '42%',
    margin: 30,
  },
  buttonStyle: {
    height: '32%',
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#713C6A",
    borderRadius: 10,
    marginTop: 30,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: "85%",
    width: "20%",
    resizeMode: "contain",
  },
  buttonTitleStyle: {
    fontSize: 18,
    fontWeight: "500",
    margin: 20,
  },
  buttonTextStyle: {
    fontSize: 12,
    fontStyle: "normal",
    lineHeight: 20,
    textAlign: "justify",
  },
  containerText: {
    width: 250,
  },
});

export default Hombres;
