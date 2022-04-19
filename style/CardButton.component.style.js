import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  buttonStyle: {
    height: hp('15%'),
    width: wp('15%'),
    flex: 0.5,
    alignContent: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#713C6A",
    backgroundColor: "rgba(248, 236, 223, 0.3)",
    borderRadius: 15,
    marginTop: 0,
    margin: 10,
  },
  buttonImageIconStyle: {
    height: hp('5%'),
    width: wp('10%'),
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  buttonTextStyle: {
    fontSize: hp('1.5%'),
    fontWeight: "500",
    textAlign: "center",
  },
});
