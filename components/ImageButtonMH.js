import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from '../style/ImageButtonMH.component.style'
import React from "react";

const ImageButtonMH = ({ onPress, buttonImage, buttonTitle, buttonText }) => {
  return (
    <TouchableOpacity
      style={styles.buttonStyle}
      activeOpacity={0.5}
      onPress={onPress}
    >
      <Image
        style={styles.buttonImageIconStyle}
        source={{ uri: buttonImage }}
      />
      <View style={styles.containerText}>
        <Text style={styles.buttonTitleStyle} numberOfLines={5}>
          {buttonTitle}
          {"\n"}
          <Text style={styles.buttonTextStyle}>{buttonText} </Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ImageButtonMH;
