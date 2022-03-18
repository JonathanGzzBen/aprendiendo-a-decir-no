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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Introduccion = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <Text style={styles.title}>Aprendiendo a decir que NO</Text>
        <Image
          source={{
            uri: "https://i.imgur.com/GZTfodE.jpg",
          }}
          style={styles.mainImageStyle}
        />
        <Text style={styles.textStyle}>
          Decir NO, debe ser algo sencillo y fácil de decir y debe ser
          respetado, si no es respetado no dudes en gritar, irte de ahi o actuar
          de manera defensiva ya que es un crimen obligar a alguien a algo que
          no quiere.
        </Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
            <Image
              source={{
                uri: "https://i.imgur.com/YaCEcWv.png",
              }}
              style={styles.buttonImageIconStyle}
            />
            <Text style={styles.buttonTextStyle}>Cuidados en hombres</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
            <Image
              source={{
                uri: "https://i.imgur.com/gqDgeMp.png",
              }}
              style={styles.buttonImageIconStyle}
            />
            <Text style={styles.buttonTextStyle}>Cuidados en mujeres</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
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
    height: "32%",
    width: "32%",
    resizeMode: "center",
    marginLeft: 33,
    marginTop: 15,
    marginBottom: 15,
  },
  buttonTextStyle: {
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
  },
  mainImageStyle: {
    minWidth: 90,
    minHeight: 165,
    margin: 15,
  },
});

export default Introduccion;