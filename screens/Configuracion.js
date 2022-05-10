import { useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../style/GeneralStyles";
import { Avatar } from "react-native-elements";

import { getAuth, signOut } from "firebase/auth";
import ConfigButton from "../components/ConfigButton";
import { UserContext } from "../context/UserContext";

const Configuracion = ({ navigation }) => {
  const [user, setUser] = useContext(UserContext);
  const auth = getAuth();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <ScrollView style={styles.safeContainer}>
      <View style={styles.container}>
        <Avatar
          rounded
          size={200}
          source={{ uri: "https://i.imgur.com/K4DfE5S.jpg" }}
          containerStyle={{ margin: 20, alignSelf: "center" }}
        />
        <Text style={styles.title}>{user.name}</Text>
        <View style={styles.divider}></View>
        <ConfigButton
          onPress={() => navigation.navigate("Perfil", { name: "Perfil" })}
          textButton="Perfil"
          firstImage="https://i.imgur.com/A5hSs7b.png"
          secondImage="https://i.imgur.com/8rkJHN0.png"
        />
        <View style={styles.divider}></View>
        <ConfigButton
          onPress={handleSignOut}
          textButton="Cerrar sesión"
          firstImage="https://i.imgur.com/zIXdblu.png"
          secondImage="https://i.imgur.com/8rkJHN0.png"
        />
      </View>
    </ScrollView>
  );
};

export default Configuracion;
