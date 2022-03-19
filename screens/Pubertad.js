import React, { useState } from "react";
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

const Pubertad = () => {
  return (
    <ScrollView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>¿Qué es la pubertad?</Text>
        <Image
          source={require("../src/img/pubertad.png")}
          style={styles.mainImageStyle}
        />
        <Text style={styles.textStyle}>
          Pubertad es el momento de la vida cuando un niño o una niña madura
          sexualmente. Es un proceso que suele ocurrir entre los 10 y 14 años
          para las niñas y entre los 12 y 16 para los varones. Causa cambios
          físicos y afecta a niños y niñas de manera distinta.
        </Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
            <Image
              source={require("../src/img/masculino.png")}
              style={styles.buttonImageIconStyle}
            />
            <Text style={styles.buttonTextStyle}>Pubertad en hombres</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
            <Image
              source={require("../src/img/femenino.png")}
              style={styles.buttonImageIconStyle}
            />
            <Text style={styles.buttonTextStyle}>Pubertad en mujeres</Text>
          </TouchableOpacity>
        </View>
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
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  buttonStyle: {
    height: 110,
    width: 100,
    flex: 0.5,
    alignContent: "center",
    borderWidth: 2,
    borderColor: "#713C6A",
    justifyContent: "center",
    backgroundColor: "rgba(248, 236, 223, 0.3)",
    borderRadius: 15,
    marginTop: 20,
    margin: 10,
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
  buttonImageIconStyle: {
    height: 32,
    width: 32,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  buttonTextStyle: {
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
  },
  mainImageStyle: {
    width: '100%',
    height: '60%',
    margin: 15,
  },
});

export default Pubertad;
