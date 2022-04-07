import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 10,
    margin: 10,
    padding: 30,
    alignItems: "center",
    textAlign: "center",
  },
  safeContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  textStyle: {
    fontSize: 14,
    flex: 0.2,
    fontStyle: "normal",
    paddingTop: 15,
    letterSpacing: 1.3,
    textAlign: "justify",
    width: "100%",
  },
  mainImageStyle: {
    width: "100%",
    height: 250,
    margin: 10,
    resizeMode: "contain",
  },
  divider: {
    width: "100%",
    height: 50,
  },
});

export default Info;
