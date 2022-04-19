import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  buttonStyle: {
    height: hp('21%'),
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#713C6A",
    borderRadius: 10,
    marginTop: 30,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: hp('100%'),
    width: wp('16%'),
    resizeMode: "contain",
  },
  buttonTitleStyle: {
    fontSize: hp('2.3%'),
    fontWeight: "500",
    margin: 20,
  },
  buttonTextStyle: {
    fontSize: hp('1.35%'),
    fontStyle: "normal",
    lineHeight: 20,
    textAlign: "justify",
  },
  containerText: {
    width: wp('58%'),
  },
});
