import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../style/ConfigButton.component.style";
import React from "react";

const ConfigButton = ({onPress, firstImage, secondImage, textButton}) => {
  return (
    <TouchableOpacity
      style={styles.buttonStyle}
      activeOpacity={0.5}
      onPress={onPress}
    >
      <Image
        source={{ uri: firstImage }}
        style={styles.buttonImageIconStyle}
      />
      <View syle={styles.containerText}>
        <Text style={styles.buttonTitleStyle}>{textButton}</Text>
      </View>
      <Image
        source={{ uri: secondImage }}
        style={styles.buttonImageIconStyle}
      />
    </TouchableOpacity>
  );
};

export default ConfigButton;
