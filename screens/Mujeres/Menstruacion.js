import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import Info from "../../components/Info";
import styles from "../../style/GeneralStyles";

const Menstruacion = () => {
  const [info, setInfo] = useState([
    { info: "Ya lleva varios años llevando sostén o sujetador.", key: 1 },
    {
      info: "Tiene vello corporal en sus partes íntimas y en las axilas.",
      key: 2,
    },
    {
      info: "Pierde un líquido trasparente y denso (llamado flujo vaginal) por la vagina.",
      key: 3,
    },
  ]);

  const [sintomas, setSintomas] = useState([
    { sintoma: "Tener malhumor", key: 1 },
    { sintoma: "Estar más triste de lo habitual", key: 2 },
    { sintoma: "Sentirse muy hinchada", key: 3 },
    { sintoma: "Tener espinillas", key: 4 },
  ]);

  return (
    <ScrollView style={styles.safeContainer}>
      <Info
        title="¿Qué es la menstruación?"
        image="https://i.imgur.com/ocVgGUi.png"
        text="La menstruación (conocida coloquialmente como ‘la regla’) es cuando sale sangre del cuerpo de una niña a través de la vagina. Es una señal de que la niña se está acercando al final de la pubertad."
      />

      <Info
        title="¿Cómo sabré si se está acercando mi primera menstruación?"
        image="https://i.imgur.com/jSwCP8U.png"
        text={
          "Hay algunos signos de que una niña puede tener su primera menstruación. Entre ellos, se incluyen los siguientes:"
        }
      />

      <View style={styles.container}>
        {info.map((item) => {
          return (
            <View key={item.key} style={styles.listContainer}>
              <Text style={styles.item}>🟣{item.info}</Text>
            </View>
          );
        })}
      </View>

      <Info
        title="¿Qué es el síndrome pre-menstrual?"
        image="https://i.imgur.com/kR12VeX.jpg"
        text={
          "El síndrome premenstrual es cuando una niña tiene síntomas emocionales y físicos justo antes de que la menstruación y/o durante la primera parte de la menstruación. Una niña con síndrome premenstrual puede: "
        }
      />

      <View style={styles.container}>
        {sintomas.map((item) => {
          return (
            <View key={item.key} style={styles.listContainer}>
              <Text style={styles.item}>🟣{item.sintoma}</Text>
            </View>
          );
        })}
      </View>

      <Info
        title="Es importante que sepas"
        image="https://i.imgur.com/oOpO0Twl.png"
        text="Durante la pubertad comenzarás a tener flujo vaginal. Probablemente empieces a verlo en tu ropa interior. Tu flujo puede ser transparente, blanco o medio amarillento, especialmente al secarse en tu ropa interior. Cerca de los días de tu periodo puede verse marrón o rosa.
        "
      />
      <View style={styles.container}>
        <Text style={styles.subtitle}>
          Es buena idea prestar atención a cómo es tu vulva y flujo vaginal
          normalmente (cómo se ve y huele). Esto te ayudará a darte cuenta
          rápidamente sí hay algún cambio. Los cambios a veces pueden ser una
          señal de infección.{"\n"}
        </Text>
      </View>
    </ScrollView>
  );
};

export default Menstruacion;
