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
  FlatList,
} from "react-native";
import React from "react";

const Anticonceptivos_H = () => {
  return (
    <ScrollView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>¿Qué son los métodos anticonceptivos?</Text>
        <Text style={styles.textStyle}>
          Los métodos anticonceptivos, son sustancias, objetos o procedimientos
          que evitan que la mujer quede embarazada. Permiten tener el control de
          la natalidad, ayudando a las parejas a decidir si desean o no tener
          hijos hasta el momento en que estén preparadas para ello.
        </Text>
        <Image
          source={require("../../src/img/anticonceptivos.png")}
          style={styles.mainImageStyle}
        />
      </View>
      <Image
        source={require("../../src/img/divider.png")}
        style={styles.divider}
      />
      <View style={styles.container}>
        <Text style={styles.title}>
          ¿Cuáles son los métodos anticonceptivos?
        </Text>
        <Text style={styles.subtitle}>Condón masculino</Text>
        <Text style={styles.textStyle}>
          El Condón masculino es una funda delgada de látex o poliuretano que se
          coloca sobre el pene erecto del hombre antes de tener sexo.
        </Text>
        <Image
          source={require("../../src/img/Hombres/condon.png")}
          style={styles.mainImageStyle}
        />
        <Text style={styles.subtitle}>Inyección vasagel</Text>
        <Text style={styles.textStyle}>
          Es la primera inyección anticonceptiva masculina que fue aceptada para
          su comercialización, aunque aún no ha sido aprobado por la FDA.
        </Text>
        <Image
          source={require("../../src/img/Hombres/vasagel.png")}
          style={styles.mainImageStyle}
        />
        <Text style={styles.subtitle}>Vasectonomía</Text>
        <Text style={styles.textStyle}>
          Consiste en una pequeña operación que se realiza sin bisturí, con
          anestesia local, haciendo una punción en la piel de la bolsa escrotal
          por arriba de donde se encuentran los testículos, a través de la cual
          se localizan, ligan y cortan los conductos deferentes, sitio por donde
          pasan los espermatozoides.
        </Text>
        <Image
          source={require("../../src/img/Hombres/vasectomia.png")}
          style={styles.mainImageStyle}
        />
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
    marginTop: 20,
    fontWeight: "bold",
    textAlign: "justify",
    width: "100%",
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
    height: 200,
    margin: 20,
    resizeMode: "contain",
  },
  divider: {
    width: "100%",
    height: 50,
  },
});

export default Anticonceptivos_H;
