import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    margin: 10,
    paddingTop: 30,
    paddingStart: 30,
    paddingEnd: 30,
    alignItems: "center",
  },
  title: {
    fontSize: hp('3%'),
    fontWeight: "bold",
    textAlign: "center",
  },
  textStyle: {
    fontSize: hp('2%'),
    fontStyle: "normal",
    paddingTop: 15,
    letterSpacing: 1.3,
    textAlign: "justify",
    width: "100%",
  },
  mainImageStyle: {
    width: "100%",
    height: hp('30%'),
    margin: 10,
    resizeMode: "contain",
  },
});
