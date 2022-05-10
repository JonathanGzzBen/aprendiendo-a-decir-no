import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  buttonStyle: {
    height: hp("10%"),
    width: wp("80%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonImageIconStyle: {
    height: hp("12%"),
    width: wp("12%"),
    resizeMode: "contain",
  },
  buttonTitleStyle: {
    fontWeight: "600",
    fontSize: hp('2.6%'),
    fontStyle: "normal",
    textAlign: "center",
    margin: 15,
  },
  containerText: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
});
