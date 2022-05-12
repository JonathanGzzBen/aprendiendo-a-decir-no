import { useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import { Avatar } from "react-native-elements";
import Button from "../components/Button";
import styles from "../style/Profile.style";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { UserContext } from "../context/UserContext";

const Perfil = ({ navigation }) => {
  const [user, setUser] = useContext(UserContext);

  const updateInfo = () => {
    navigation.navigate("EditProfile", { user: user });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.userContainer}>
          <Avatar
            rounded
            size="xlarge"
            source={{ uri: "https://i.imgur.com/K4DfE5S.jpg" }}
            containerStyle={styles.avatar}
          />
          <Text style={styles.userTitle}>{user.name}</Text>
          <Text style={styles.userSubTitulo}>{user.age + " años"}</Text>
        </View>
        <View style={styles.divider}></View>
        <Text style={styles.title}>Tu información</Text>

        <View style={styles.menuItem}>
          <Ionicons name="mail" size={25} color={"#005C9A"} />
          <Text style={styles.res}>{user.email}</Text>
        </View>
        <View style={styles.menuItem}>
          <Ionicons name="man" size={25} color={"#00C895"} />
          <Text style={styles.res}>{user.tutorName}</Text>
        </View>
        <View style={styles.menuItem}>
          <FontAwesome name="birthday-cake" size={25} color={"#00C895"} />
          <Text style={styles.res}>{user.tutorAge + " años"}</Text>
        </View>
        <View style={styles.menuItem}>
          <FontAwesome name="child" size={25} color={"#7D79AA"} />
          <Text style={styles.res}>{user.name}</Text>
        </View>
        <View style={styles.menuItem}>
          <FontAwesome name="birthday-cake" size={25} color={"#7D79AA"} />
          <Text style={styles.res}>{user.age + " años"}</Text>
        </View>
        <Button onPress={updateInfo} textButton="Editar información" />
      </View>
    </ScrollView>
  );
};

export default Perfil;
