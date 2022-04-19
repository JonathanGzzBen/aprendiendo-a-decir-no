import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import Info from "../../components/Info";
import styles from "../../style/GeneralStyles";

const Anticonceptivos_H = () => {
  const [anticonceptivos, setAnticonceptivos] = useState([
    {
      titulo: "Condon masculino",
      imagen: "https://i.imgur.com/7XvpKMf.png",
      texto:
        "El Condón masculino es una funda delgada de látex o poliuretano que se coloca sobre el pene erecto del hombre antes de tener sexo.",
      key: 1,
    },
    {
      titulo: "Inyección vasagel",
      imagen: "https://i.imgur.com/eAqwk2a.png",
      texto:
        "Es la primera inyección anticonceptiva masculina que fue aceptada para su comercialización, aunque aún no ha sido aprobado por la FDA.",
      key: 2,
    },
    {
      titulo: "Vasectonomía",
      imagen: "https://i.imgur.com/kivW1Bf.png",
      texto:
        "Consiste en una pequeña operación que se realiza sin bisturí, con anestesia local, haciendo una punción en la piel de la bolsa escrotal por arriba de donde se encuentran los testículos, a través de la cual se localizan, ligan y cortan los conductos deferentes, sitio por donde pasan los espermatozoides.",
      key: 3,
    },
  ]);

  return (
    <ScrollView style={styles.safeContainer}>
      <Info
        title="¿Qué son los métodos anticonceptivos?"
        image="https://i.imgur.com/PnUQuH9l.png"
        text="Los métodos anticonceptivos, son sustancias, objetos o procedimientos que evitan que la mujer quede embarazada. Permiten tener el control de la natalidad, ayudando a las parejas a decidir si desean o no tener hijos hasta el momento en que estén preparadas para ello."
      />

      {anticonceptivos.map((item) => {
        return (
          <View>
            <Info title={item.titulo} image={item.imagen} text={item.texto} />
          </View>
        );
      })}

      <View style={styles.container}>
        <Text style={styles.subtitle}>
          Es importante que antes de iniciar tu vida sexual acudas al médico.
          {"\n"}
        </Text>
      </View>
    </ScrollView>
  );
};

export default Anticonceptivos_H;
