import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Pressable,
  Linking,
} from "react-native";
import styles from "../style/GeneralStyles";

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


export default Contacto;
