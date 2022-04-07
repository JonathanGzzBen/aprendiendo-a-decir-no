import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React, { useState } from "react";

const Acne = () => {
  const [info, setInfo] = useState([
    {
      info: "Lávate la cara con suavidad una o dos veces al día con agua tibia y un jabón suave o una crema limpiadora para la piel.",
      key: 1,
    },
    {
      info: "No te frotes la cara. De hecho, eso te puede empeorar el acné e irritarte la piel.",
      key: 2,
    },
    {
      info: "Si usas maquillaje, asegúrate de lavarte la cara para eliminarlo por completo al final de cada día. (Recuerda que no importa el sexo o género, todos pueden usar maquillaje).",
      key: 3,
    },
    {
      info: "Lávate la cara después de hacer ejercicio físico y sudar mucho.",
      key: 4,
    },
  ]);

  return (
    <ScrollView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>¿Qué es el acné?</Text>
        <Image
          source={require("../src/img/acne-mixto.png")}
          style={styles.mainImageStyle}
        />
        <Text style={styles.textStyle}>
          El acné es una afección de la piel que se manifiesta con la aparición
          de bultos o protuberancias (granos). Hay diferentes tipos de granos:
          los puntos blancos, las espinillas (o puntos negros), los granos rojos
          y los granos llenos de pus.
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>¿Qué es lo que causa el acné?</Text>
        <Image
          source={require("../src/img/grano.png")}
          style={styles.mainImageStyle}
        />
        <Text style={styles.textStyle}>
          Pues bien, tu piel está cubierta de pequeños agujeritos llamados
          folículos pilosos o poros. Los poros contienen glándulas sebáceas, que
          fabrican sebo, un aceite o grasa natural que humedece el cabello y la
          piel.
        </Text>
        <Text style={styles.textStyle}>
          La mayoría de las veces, estas glándulas fabrican la cantidad adecuada
          de sebo, y a los poros no les pasa nada malo. Pero hay veces en que
          una cantidad excesiva de sebo, células muertas de la piel y/o unos
          gérmenes llamados bacterias obstruyen los poros. Y esto puede causar
          el acné.
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>¿Qué puedo hacer con mi acné?</Text>
        <Image
          source={require("../src/img/cara.png")}
          style={styles.mainImageStyle}
        />
        <Text style={styles.textStyle}>
          Si tienes acné, hay varias medidas que puedes poner en práctica para
          no tener tantos granos:
        </Text>

        <View style={styles.listContainer}>
          {info.map((item) => {
            return (
              <View key={item.key} style={styles.listContainer}>
                <Text style={styles.item}>🔴{item.info}</Text>
              </View>
            );
          })}
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
    margin: 10,
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

export default Acne;
