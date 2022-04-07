import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const CambiosFisicos_M = ({ navigation }) => {
  const [info, setInfo] = useState([
    { info: "Tus senos crecerán y desarrollarán.", key: 1 },
    {
      info: "Tus caderas se ensancharán y tu cuerpo puede tornarse más curvilíneo.",
      key: 2,
    },
    { info: "Comienzas a tener tu período/regla.", key: 3 },
    { info: "Tu labia puede cambiar de color y agrandarse.", key: 4 },
  ]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <Text style={styles.title}>Cambios fisicos en Mujeres</Text>
        <Image
          source={require("../../src/img/Mujer/cambiosF.png")}
          style={styles.mainImageStyle}
        />
        <Text style={styles.subtitle}>
          Algunos cambios fisicos que puede experimentar una niña en la etapa de
          la pubertad son:{"\n"}
        </Text>
        <View style={styles.listContainer}>
          {info.map((item) => {
            return (
              <View key={item.key} style={styles.listContainer}>
                <Text style={styles.item}>🟣{item.info}</Text>
              </View>
            );
          })}
        </View>
        <Text style={styles.subtitle}>
          Otros cambios significativos son:{"\n"}
        </Text>
        <TouchableOpacity
          style={styles.buttonImage}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Acne", { name: "Acne" })}
        >
          <Image
            source={require("../../src/img/Mujer/acne-mujer.jpg")}
            style={styles.buttonImageIconStyle}
          />
        </TouchableOpacity>
        <Text style={styles.caption}>Acné</Text>
        <TouchableOpacity
          style={styles.buttonImage}
          activeOpacity={0.5}
          onPress={() =>
            navigation.navigate("Menstruacion", { name: "Menstruacion" })
          }
        >
          <Image
            source={require("../../src/img/Mujer/menstruacion-feed.png")}
            style={styles.buttonImageIconStyle}
          />
        </TouchableOpacity>
        <Text style={styles.caption}>Menstruación</Text>
        <TouchableOpacity
          style={styles.buttonImage}
          activeOpacity={0.5}
          onPress={() =>
            navigation.navigate("Higiene_M", { name: "Higiene_M" })
          }
        >
          <Image
            source={require("../../src/img/Mujer/higiene-feed.png")}
            style={styles.buttonImageIconStyle}
          />
        </TouchableOpacity>
        <Text style={styles.caption}>Higiene íntima</Text>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "justify",
    width: "100%",
  },
  buttonImage: {
    height: 130,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 0.4,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#713C6A",
    borderRadius: 10,
    marginTop: 10,
  },
  caption: {
    fontSize: 16,
    fontStyle: "normal",
    paddingTop: 15,
  },
  buttonImageIconStyle: {
    height: 125,
    width: "100%",
    resizeMode: "contain",
  },
  textStyle: {
    fontSize: 14,
    flex: 0.2,
    fontStyle: "normal",
    paddingTop: 5,
    letterSpacing: 1.3,
    textAlign: "justify",
    width: "100%",
  },
  mainImageStyle: {
    width: 175,
    height: 250,
    margin: 15,
  },
  item: {
    padding: 10,
    fontSize: 14,
  },
  listContainer: {
    flex: 1,
    marginBottom: 10,
    width: "100%",
  },
});

export default CambiosFisicos_M;
