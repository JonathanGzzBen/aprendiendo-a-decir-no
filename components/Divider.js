import { View, StyleSheet, Image } from "react-native";
import React from "react";

const Divider = () => {
  return (
    <View>
      <Image
        source={{ uri: "https://i.imgur.com/qTGlrye.png" }}
        style={styles.divider}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: 50,
  },
});

export default Divider;
