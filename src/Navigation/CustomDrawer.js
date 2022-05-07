import { View, Text } from "react-native";
import { DrawerItemList } from "@react-navigation/drawer";
import { Avatar } from "react-native-elements";
import React from "react";

const CustomDrawer = () => {
  return (
    <View style={s.container}>
      <View style={s.bgContainer}>
        <TouchableOpacity>
          <View style={s.userContainer}>
            <Avatar
              rounded
              size="large"
              source={{ uri: "https://i.imgur.com/K4DfE5S.jpg" }}
              overlayContainerStyle={{ backgroundColor: "#713C6A" }}
            />
          </View>
          <View style={s.userNombre}>
            <Text style={s.userTitulo}>{Name()}</Text>
            <Text style={s.userSubTitulo}>{Age() + " años"}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <DrawerItemList {...props} />
    </View>
  );
};

export default CustomDrawer;
