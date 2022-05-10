import { View, Text, Image } from "react-native";
import styles from "../../style/CustomDrawer.style";
import {
  DrawerItemList,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const CustomDrawer = (props) => {
  const [user, setUser] = useContext(UserContext);

  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.drawerContainer}
      >
        <View style={styles.profileContainer}>
          <Image
            style={styles.avatar}
            source={{ uri: "https://i.imgur.com/K4DfE5S.jpg" }}
          />
          <Text style={styles.title}>{user.name}</Text>
          <Text style={styles.subtitle}>{user.age + " años"}</Text>
        </View>
        <View style={styles.itemContainer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
