import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 10,
    margin: 10,
    padding: 30,
    alignItems: "center",
    textAlign: "center",
  },
  safeContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  title: {
    fontSize: hp('3%'),
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: hp('2%'),
    fontWeight: "bold",
    textAlign: "justify",
    width: "100%",
  },
  mainImageStyle: {
    width: wp('85%'),
    height: hp('20%'),
    marginBottom: 15,
  },
});
