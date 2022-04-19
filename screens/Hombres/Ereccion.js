import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";
import Info from "../../components/Info";
import styles from "../../style/GeneralStyles";

const Ereccion = () => {
  return (
    <ScrollView style={styles.safeContainer}>
      <Info
        title="¿Qué es una erección?"
        image="https://i.imgur.com/pca0roa.jpg"
        text="Una erección ocurre cuando el pene se llena de sangre y se pone rígido. El pene se agranda y sobresale del cuerpo. Al llegar a la pubertad, los niños comenzarán a notar que las erecciones ocurren más a menudo. Y son perfectamente normales."
      />
      <Info
        title="¿Cuándo ocurre una erección?"
        image="https://i.imgur.com/aVAgTFB.png"
        text="Una erección puede ocurrir en cualquier momento. Puedes tener muchas en un día o ninguna. Esto depende de la edad, la madurez sexual, el nivel de actividad e incluso de la cantidad de horas que duermas."
      />
    </ScrollView>
  );
};

export default Ereccion;
