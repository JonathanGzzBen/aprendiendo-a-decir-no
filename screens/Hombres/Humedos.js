import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";
import Info from "../../components/Info";
import styles from "../../style/GeneralStyles";

const Humedos = () => {
  return (
    <ScrollView style={styles.safeContainer}>
      <Info
        title="¿Qué es un sueño húmedo?"
        image="https://i.imgur.com/0ypA0C0.jpg"
        text="Un sueño húmedo es cuando el semen (el líquido que contiene esperma) es despedido del pene mientras un niño duerme. El semen es liberado a través de la uretra, es decir, el mismo conducto por donde sale la orina (pis). Esto se denomina eyaculación."
      />
      <Info
        title="¿Qué puede ocasionar un sueño húmedo?"
        image="https://i.imgur.com/T72HeOS.jpg"
        text="Una erección puede producirse incluso cuando duermes. Algunas veces, es posible que te despiertes y tu ropa interior o la cama estén mojadas. Tal vez te preocupes porque esto significa que mojaste la cama como cuando eras pequeño, pero es probable que hayas tenido una emisión nocturna o 'sueño húmedo'."
      />
      <View style={styles.container}>
        <Text style={styles.subtitleItalic}>
          Los sueños húmedos ocurren cuando el cuerpo de un niño comienza a
          producir más testosterona.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Humedos;
