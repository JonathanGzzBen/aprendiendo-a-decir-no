import { Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../style/Button.component.style";

const Button = ({ onPress, textButton }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
      activeOpacity={0.5}
    >
      <Text style={styles.textButton}>{textButton}</Text>
    </TouchableOpacity>
  );
};

export default Button;
