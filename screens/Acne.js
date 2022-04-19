import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import Info from "../components/Info";
import styles from "../style/GeneralStyles";

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
      <Info
        title="¿Qué es el acné?"
        image="https://i.imgur.com/9n5nUdC.png"
        text="El acné es una afección de la piel que se manifiesta con la aparición de bultos o protuberancias (granos). Hay diferentes tipos de granos: los puntos blancos, las espinillas (o puntos negros), los granos rojos y los granos llenos de pus."
      />
      <Info
        title="¿Qué es lo que causa el acné?"
        image="https://i.imgur.com/v7uzwmO.png"
        text="Pues bien, tu piel está cubierta de pequeños agujeritos llamados folículos pilosos o poros. Los poros contienen glándulas sebáceas, que fabrican sebo, un aceite o grasa natural que humedece el cabello y la piel. Pero hay veces en que una cantidad excesiva de sebo, células muertas de la piel y/o unos gérmenes llamados bacterias obstruyen los poros."
      />

      <View style={styles.container}>
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

export default Acne;
