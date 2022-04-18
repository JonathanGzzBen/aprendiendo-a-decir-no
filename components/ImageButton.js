import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "../style/ImageButton.component.style";
import React from "react";

const ImageButton = ({ onPress, buttonImage, buttonCaption }) => {
  return (
    <TouchableOpacity
      style={styles.buttonImage}
      activeOpacity={0.5}
      onPress={onPress}
    >
      <Image
        source={{ uri: buttonImage }}
        style={styles.buttonImageIconStyle}
      />
      <Text style={styles.caption}>{buttonCaption}</Text>
    </TouchableOpacity>
  );
};

export default ImageButton;
