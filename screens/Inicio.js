import { View, ScrollView, Text } from "react-native";
import ImageButton from "../components/ImageButton";
import styles from "../style/GeneralStyles";

const Inicio = ({ navigation }) => {
  return (
    <ScrollView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Aprendiendo a decir que no</Text>
        <ImageButton
          buttonImage="https://i.imgur.com/Ni9g5Rn.jpg"
          buttonCaption="Introducción"
          onPress={() => navigation.navigate("Introduccion", { name: "Introduccion" })}
        />
        <ImageButton
          buttonImage="https://i.imgur.com/tn063Tg.jpg"
          buttonCaption="Pubertad"
          onPress={() => navigation.navigate("Pubertad", { name: "Pubertad" })}
        />
        <ImageButton
          buttonImage="https://i.imgur.com/TY73Rg3.jpg"
          buttonCaption="Sexualidad"
          onPress={() => navigation.navigate("Sexualidad", { name: "Sexualidad" })}
        />
      </View>
    </ScrollView>
  );
};

export default Inicio;
