import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  button: {
    backgroundColor: "#713C6A",
    padding: 10,
    alignSelf: "center",
    borderRadius: 15,
    margin: 30,
    paddingLeft: 40,
    paddingRight: 40,
  },
  textButton: {
    color: "white",
    fontSize: hp('2.5%'),
  },
});
