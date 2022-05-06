import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  inputTitle: {
    paddingLeft: 20,
    fontSize: hp("2.2%"),
    fontWeight: "bold",
  },
  inputBox: {
    width: wp("90%"),
    height: hp("5.5%"),
    margin: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "#713C6A",
  },
});
