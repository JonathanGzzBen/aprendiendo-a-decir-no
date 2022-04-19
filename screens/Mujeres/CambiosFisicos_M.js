import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import ImageButton from "../../components/ImageButton";
import styles from "../../style/GeneralStyles";

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
    <ScrollView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Cambios fisicos en Mujeres</Text>
        <Image
          source={require("../../src/img/Mujer/cambiosF.png")}
          style={styles.mainImageMH}
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
        <ImageButton
          buttonImage="https://i.imgur.com/ewMnRjs.jpg"
          buttonCaption="Acné"
          onPress={() => navigation.navigate("Acne", { name: "Acne" })}
        />
        <ImageButton
          buttonImage="https://i.imgur.com/oX3dG14.png"
          buttonCaption="Menstruación"
          onPress={() =>
            navigation.navigate("Menstruacion", { name: "Menstruacion" })
          }
        />
        <ImageButton
          buttonImage="https://i.imgur.com/himXlRM.png"
          buttonCaption="Higiene íntima"
          onPress={() =>
            navigation.navigate("Higiene_M", { name: "Higiene_M" })
          }
        />
      </View>
    </ScrollView>
  );
};

export default CambiosFisicos_M;
