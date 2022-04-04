import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";
import React from "react";

const CambiosFisicos_H = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <Text style={styles.title}>Cambios fisicos en Hombres</Text>
        <Image
          source={require("../../src/img/Hombres/cambiosH.png")}
          style={styles.mainImageStyle}
        />
        <Text style={styles.subtitle}>
          Algunos cambios fisicos que puede experimentar un niño en la etapa de
          la pubertad son:{"\n"}
        </Text>
        <View style={styles.listContainer}>
          <FlatList
            data={[
              { key: "Su voz se torna más grave y profunda." },
              {
                key: "Su nuez de Adán (protuberancia en tu garganta) puede crecer y ser más visible.",
              },
              { key: "Su pene y testículos se agrandan." },
              { key: "Puede crecer vello en su cara, pecho y espalda." },
              { key: "Sus hombros y pecho se ensanchan." },
              {
                key: "Pueden tener algo de hinchazón en las tetillas durante la pubertad.",
              },
              {
                key: "Puede parecer como el comienzo del crecimiento de los pechos pero generalmente esto pasa pronto.",
              },
            ]}
            renderItem={({ item }) => (
              <Text style={styles.item}>
                {"🔵" + " "}
                {item.key}
              </Text>
            )}
          />
        </View>
        <Text style={styles.subtitle}>
          Otros cambios significativos son:{"\n"}
        </Text>
        <TouchableOpacity
          style={styles.buttonImage}
          activeOpacity={0.5}
          onPress={() =>
            navigation.navigate("Acne", { name: "Acne" })
          }
        >
          <Image
            source={require("../../src/img/Hombres/acne-hombre.jpg")}
            style={styles.buttonImageIconStyle}
          />
        </TouchableOpacity>
        <Text style={styles.caption}>Acné</Text>
        <TouchableOpacity
          style={styles.buttonImage}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Ereccion", { name: "Ereccion" })}
        >
          <Image
            source={require("../../src/img/Hombres/ereccion.jpg")}
            style={styles.buttonImageIconStyle}
          />
        </TouchableOpacity>
        <Text style={styles.caption}>Erecciones</Text>
        <TouchableOpacity
          style={styles.buttonImage}
          activeOpacity={0.5}
          onPress={() =>
            navigation.navigate("Humedos", { name: "Humedos" })
          }
        >
          <Image
            source={require("../../src/img/Hombres/dreams.jpg")}
            style={styles.buttonImageIconStyle}
          />
        </TouchableOpacity>
        <Text style={styles.caption}>Sueñosh húmedos</Text>
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
    width: '100%',
  },
});

export default CambiosFisicos_H;
