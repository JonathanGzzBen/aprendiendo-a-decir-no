import { Text, TouchableOpacity, Image } from "react-native";
import styles from "../style/CardButton.component.style";
import React from "react";

const CardButton = ({onPress, buttonImage, buttonText}) => {
  return (
    <TouchableOpacity
      style={styles.buttonStyle}
      activeOpacity={0.5}
      onPress={onPress}
    >
      <Image
        source={{ uri: buttonImage }}
        style={styles.buttonImageIconStyle}
      />
      <Text style={styles.buttonTextStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default CardButton;
