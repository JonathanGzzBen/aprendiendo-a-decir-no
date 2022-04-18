import { View, Text, Image } from "react-native";
import styles from "../style/Info.component.style";
import React from "react";

const Info = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Image source={{ uri: props.image }} style={styles.mainImageStyle} />
      <Text style={styles.textStyle}>{props.text}</Text>
    </View>
  );
};

export default Info;
