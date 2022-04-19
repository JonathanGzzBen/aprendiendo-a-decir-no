import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import ImageButton from "../../components/ImageButton";
import styles from "../../style/GeneralStyles";

const CambiosFisicos_H = ({ navigation }) => {
  const [info, setInfo] = useState([
    { info: "Su voz se torna más grave y profunda.", key: 1 },
    {
      info: "Su nuez de Adán (protuberancia en tu garganta) puede crecer y ser más visible.",
      key: 2,
    },
    { info: "Su pene y testículos se agrandan.", key: 3 },
    { info: "Puede crecer vello en su cara, pecho y espalda.", key: 4 },
    { info: "Sus hombros y pecho se ensanchan.", key: 5 },
    {
      info: "Pueden tener algo de hinchazón en las tetillas durante la pubertad.",
      key: 6,
    },
    {
      info: "Puede parecer como el comienzo del crecimiento de los pechos, pero generalmente esto pasa pronto.",
      key: 7,
    },
  ]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <Text style={styles.title}>Cambios fisicos en Hombres</Text>
        <Image
          source={{ uri: "https://i.imgur.com/nDY1QRV.png" }}
          style={styles.mainImageMH}
        />
        <Text style={styles.subtitle}>
          Algunos cambios fisicos que puede experimentar un niño en la etapa de
          la pubertad son:{"\n"}
        </Text>
        <View style={styles.listContainer}>
          {info.map((item) => {
            return (
              <View key={item.key} style={styles.listContainer}>
                <Text style={styles.item}>🔵{item.info}</Text>
              </View>
            );
          })}
        </View>
        <Text style={styles.subtitle}>
          Otros cambios significativos son:{"\n"}
        </Text>
        <ImageButton
          buttonImage="https://i.imgur.com/AIb8pUb.jpg"
          buttonCaption="Acné"
          onPress={() => navigation.navigate("Acne", { name: "Acne" })}
        />
        <ImageButton
          buttonImage="https://i.imgur.com/pca0roa.jpg"
          buttonCaption="Erecciones"
          onPress={() => navigation.navigate("Ereccion", { name: "Ereccion" })}
        />
        <ImageButton
          buttonImage="https://i.imgur.com/xJcu8D5.jpg"
          buttonCaption="Sueños húmedos"
          onPress={() => navigation.navigate("Humedos", { name: "Humedos" })}
        />
      </View>
    </ScrollView>
  );
};

export default CambiosFisicos_H;
