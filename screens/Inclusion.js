import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import Info from "../components/Info";
import styles from "../style/GeneralStyles";

const Valores = () => {
  const [info, setInfo] = useState([
    {
      titulo: "¿Qué es la inclusión?",
      imagen: "https://i.imgur.com/Ex52Vsy.png",
      texto:
        "La inclusión consiste en tratar a los demás de la misma forma en la que nos gustaría que nos trataran a nosotros y en saber que aunque parezcamos distintos, todos somos iguales.",
      key: 1,
    },
    {
      titulo: "¿Qué es el sexo o género asignado?",
      imagen: "https://i.imgur.com/owPkHcR.png",
      texto:
        "Cuando nace un bebé se le asigna el género, masculino o femenino, de acuerdo con las características físicas. Esto se refiere al 'sexo' o al 'género asignado' del niño. ",
      key: 2,
    },
    {
      titulo: "¿Qué es la identidad de género?",
      imagen: "https://i.imgur.com/4IlLCoC.png",
      texto:
        "La ‘identidad de género’ se refiere al sentimiento interno que las personas tienen de quiénes son. Puede ser masculino, femenino, algo en el medio, una combinación de ambas cosas o ninguna.",
      key: 3,
    },
  ]);

  const [inclusion, setInclusion] = useState([
    {
      info: "Alrededor de los dos años: Los niños toman conciencia de las diferencias físicas entre varones y mujeres.",
      key: 1,
    },
    {
      info: "Antes de su tercer cumpleaños: La mayoría de los niños se pueden identificar como varones o mujeres con facilidad.",
      key: 2,
    },
    {
      info: "A los cuatro años: La mayoría de los niños tienen un sentido estable de su identidad de género.",
      key: 3,
    },
  ]);

  const [expresion, setExpresion] = useState([
    {
      info: "Vestimenta o peinado.",
      key: 1,
    },
    {
      info: "Nombre o apodo preferidos.",
      key: 2,
    },
    {
      info: "Conducta social que refleje grados variados de agresividad, dominio, dependencia y delicadeza.",
      key: 3,
    },
    {
      info: "Los modales, el estilo de conducta, los gestos físicos y otras acciones no verbales identificadas como masculinas o femeninas.",
      key: 4,
    },
    {
      info: "Relaciones sociales, incluyendo el género de sus amigos y personas a las que decide imitar.",
      key: 5,
    },
  ]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      {info.map((item) => {
        return (
          <View key={item.key}>
            <Info title={item.titulo} image={item.imagen} text={item.texto} />
          </View>
        );
      })}

      <View style={styles.container}>
        <Text style={styles.subtitle}>
          La identidad de género suele desarrollarse en etapas:
          {"\n"}
        </Text>
        {inclusion.map((item) => {
          return (
            <View key={item.key} style={styles.listContainer}>
              <Text style={styles.item}>🟠{item.info}</Text>
            </View>
          );
        })}

        <Text style={styles.subtitle}>
          Además de los juguetes, juegos y deportes que eligen, los niños suelen
          expresar su identidad de género de las siguientes maneras:
          {"\n"}
        </Text>
        {expresion.map((item) => {
          return (
            <View key={item.key} style={styles.listContainer}>
              <Text style={styles.item}>🟢{item.info}</Text>
            </View>
          );
        })}

        <Text style={styles.subtitle}>
          Los colores, la ropa, los nombres, los cortes de cabello, juguetes,
          labores domésticas, etc. NO TIENEN GÉNERO, es decir, todos tenemos
          gustos diferentes y el preferir o que nos guste algo que los demás
          piensan que no es para hombres o mujeres no nos hace menos.
          {"\n"}
        </Text>
      </View>
    </ScrollView>
  );
};

export default Valores;
