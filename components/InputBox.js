import { View, Text, TextInput } from "react-native";
import React from "react";
import styles from "../style/InputBox.component.style";

const InputBox = ({ inputTitle, inputValue, inputSet }) => {
  return (
    <View>
      <Text style={styles.inputTitle}>{inputTitle}</Text>
      <TextInput
        style={styles.inputBox}
        value={inputValue}
        onChangeText={inputSet}
      />
    </View>
  );
};

export default InputBox;
