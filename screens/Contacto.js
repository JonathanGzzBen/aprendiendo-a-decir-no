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
  Pressable,
  Linking,
} from "react-native";

const Contacto = () => {
  return (
    <ScrollView style={styles.safeContainer}>
      <View style={styles.container}>
        <Image
          source={require("../src/img/kids.jpg")}
          style={styles.mainImageStyle}
        />
        <Text style={styles.title}>Líneas de contacto</Text>
        <View>
          <Text style={styles.textStyle}>
            En caso de encontrar en una situación sin tu consentimiento lo más
            recomendable es decirle al adulto de confianza más cercano, pero
            esto puede venir también de un adulto cercano, incluso de tu
            familia. Si este es tu caso, te recomendamos contactar a las
            autoridades.
          </Text>
          <View style={styles.linkContainer}>
            <Text
              style={styles.linkText}
              onPress={() => Linking.openURL(`tel:01 800 11 22676}`)}
            >
              Línea telefónica sobre acoso escolar
            </Text>
          </View>
          <View style={styles.linkContainer}>
            <Text
              style={styles.linkText}
              onPress={() => Linking.openURL(`tel:01-800-911-25-11}`)}
            >
              Línea telefónica de INMUJERES "Vida sin violencia"
            </Text>
          </View>
          <View style={styles.linkContainer}>
            <Text
              style={styles.linkText}
              onPress={() =>
                Linking.openURL(
                  "https://www.gob.mx/escuelalibredeacoso/documentos/realiza-tu-denuncia"
                )
              }
            >
              Portal web para denunciar acoso escolar
            </Text>
          </View>
          <View style={styles.linkContainer}>
            <Text
              style={styles.linkText}
              onPress={() =>
                Linking.openURL(
                  "https://denuncia.org/guias-por-delito/como-denunciar-el-delito-de-abuso-sexual/"
                )
              }
            >
              Portal web para conocer los pasos para denunciar abuso sexual
            </Text>
          </View>
          <Pressable
            style={styles.button}
            onPress={() =>
              Linking.openURL(
                "mailto:thejdbossv@gmail.com?subject=Aprendiendo a decir no&body=Ingresa tu mensaje"
              )
            }
          >
              <Text style={styles.textButton}>
                  Envianos tus comentarios
              </Text>
          </Pressable>
        </View>
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
    width: "100%",
    height: 200,
    margin: 20,
  },
  button: {
    backgroundColor: "#713C6A",
    padding: 12,
    alignSelf: "flex-end",
    borderRadius: 15,
    marginTop: 30,
  },
  textButton: {
    color: "white",
    fontSize: 16,
  },
  textStyle: {
    fontSize: 14,
    fontStyle: "normal",
    lineHeight: 20,
    textAlign: "justify",
    marginTop: 20,
  },
  linkContainer: {
    alignItems: "flex-start",
    marginTop: 10,
  },
  linkText: {
    color: "#713C6A",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
});

export default Contacto;
