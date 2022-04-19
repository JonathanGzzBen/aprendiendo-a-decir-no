import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  buttonImage: {
    height: hp("15%"),
    width: "100%",
    alignContent: "center",
    borderWidth: 2,
    borderColor: "#713C6A",
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 30,
  },
  caption: {
    fontSize: hp("2%"),
    textAlign:'center',
    fontStyle: "normal",
    paddingTop: 25,
  },
  buttonImageIconStyle: {
    height: hp("14.5%"),
    width: "100%",
    resizeMode: "contain",
    alignContent: "center",
    justifyContent: "center",
},
});
