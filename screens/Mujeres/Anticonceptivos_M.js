import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import Info from "../../components/Info";
import styles from "../../style/GeneralStyles";

const Anticonceptivos_M = () => {
  const [anticonceptivos, setAnticonceptivos] = useState([
    {
      titulo: "Condon femenino",
      imagen: "https://i.imgur.com/dfz98gi.png",
      texto:
        "El preservativo femenino, también llamado preservativo interno, es un dispositivo de control de natalidad (anticonceptivo) que actúa como una barrera que evita que los espermatozoides ingresen al útero. Protege contra el embarazo y las infecciones de transmisión sexual (ITS).",
      key: 1,
    },
    {
      titulo: "Capuchon vervical",
      imagen: "https://i.imgur.com/MEyBzLp.png",
      texto:
        "El capuchón cervical es un dispositivo anticonceptivo que impide que los espermatozoides ingresen en el útero. Es un capuchón de silicona ahuecado y reutilizable que se inserta en la vagina, y se ajusta firmemente al cuello del útero. Se mantiene en su lugar por succión y tiene una cinta para ayudar a extraerlo. Es eficaz para prevenir embarazos solo si se lo utiliza con espermicida.",
      key: 2,
    },
    {
      titulo: "DIU (dispositivo intrauterino)",
      imagen: "https://i.imgur.com/Un4BgUB.jpg",
      texto:
        "El diafragma es un dispositivo anticonceptivo que impide que los espermatozoides ingresen en el útero. El diafragma es una pieza pequeña de silicona o de goma reutilizable con un anillo flexible que cubre el cuello del útero. Antes de las relaciones sexuales, se inserta el diafragma profundamente en la vagina para que parte del anillo se ajuste detrás del hueso púbico. El diafragma solamente es eficaz en la prevención del embarazo cuando se utiliza con espermicida.",
      key: 3,
    },
    {
      titulo: "Diafragma",
      imagen: "https://i.imgur.com/RuReYzd.png",
      texto:
        "El diafragma es un dispositivo anticonceptivo que impide que los espermatozoides ingresen en el útero. El diafragma es una pieza pequeña de silicona o de goma reutilizable con un anillo flexible que cubre el cuello del útero. Antes de las relaciones sexuales, se inserta el diafragma profundamente en la vagina para que parte del anillo se ajuste detrás del hueso púbico. El diafragma solamente es eficaz en la prevención del embarazo cuando se utiliza con espermicida.",
      key: 4,
    },
    {
      titulo: "Pastillas anticonceptivas",
      imagen: "https://i.imgur.com/6YPAfh1.png",
      texto:
        "Las pastillas anticonceptivas son un tipo de medicamento con hormonas. Las pastillas  anticonceptivas (también conocidas como pastillas para planificar), vienen en una caja y te tomas una cada día. La pastilla anticonceptiva es segura, no muy costosa y es efectiva si la tomas siempre a tiempo. Además de prevenir embarazos, tiene muchos otros beneficios para la salud.",
      key: 5,
    },
    {
      titulo: "Implante subdérmico",
      imagen: "https://i.imgur.com/3jY3AqR.png",
      texto:
        "Los implantes anticonceptivos son una opción anticonceptiva a largo plazo para las mujeres. Un implante anticonceptivo es una varilla plástica flexible del tamaño de una cerilla que se coloca debajo de la piel en la parte superior del brazo.",
      key: 6,
    },
    {
      titulo: "Inyección anticonceptiva",
      imagen: "https://i.imgur.com/4HH3Iqg.png",
      texto:
        "Hay dos presentaciones de hormonales inyectables que se usan como anticonceptivos: la de aplicación mensual y la trimestral. La mensual contiene hormonales combinados (estrógeno y progesterona), mientras que la trimestral contiene sólo progestina. Las inyecciones anticonceptivas que contienen hormonales combinados pueden ser usadas por toda mujer sana que desea evitar o espaciar sus embarazos, y que haya recibido consejería previamente.",
      key: 7,
    },
    {
      titulo: "Parche anticonceptivos ",
      imagen: "https://i.imgur.com/FKoqHBX.png",
      texto:
        "El parche anticonceptivo (también llamado parche transdérmico) es un método anticonceptivo seguro y práctico que funciona muy bien siempre y cuando te asegures de usarlo de manera correcta. El parche anticonceptivo se pone en algunas partes de tu cuerpo, donde libera hormonas que se absorben a través de tu piel para prevenir embarazos. Además, tiene muchos otros beneficios para la salud.",
      key: 8,
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

export default Anticonceptivos_M;
