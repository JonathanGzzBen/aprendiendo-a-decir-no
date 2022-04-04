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

const Introduccion = ({navigation}) => {
  return (
    <ScrollView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Aprendiendo a decir que NO</Text>
        <Image
          source={require("../src/img/pulgar_abajo.jpg")}
          style={styles.mainImageStyle}
        />
        <Text style={styles.textStyle}>
          Decir NO, debe ser algo sencillo y fácil de decir y debe ser
          respetado, si no es respetado no dudes en gritar, irte de ahi o actuar
          de manera defensiva ya que es un crimen obligar a alguien a algo que
          no quiere.
        </Text>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate("Hombres", { name: "Hombres" })
            }
          >
            <Image
              source={require("../src/img/masculino.png")}
              style={styles.buttonImageIconStyle}
            />
            <Text style={styles.buttonTextStyle}>Cuidados en hombres</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Mujeres", { name: "Mujeres" })}
          >
            <Image
              source={require("../src/img/femenino.png")}
              style={styles.buttonImageIconStyle}
            />
            <Text style={styles.buttonTextStyle}>Cuidados en mujeres</Text>
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
    textAlign: "center",
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
    width: 175,
    height: 250,
    margin: 15,
  },
});

export default Introduccion;
