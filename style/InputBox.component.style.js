import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  inputTitle: {
    paddingLeft: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
  inputBox: {
    height: hp("5%"),
    margin: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "#713C6A",
  },
});
