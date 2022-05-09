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
  forgot: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    margin: 10
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  divider: {
    backgroundColor: "#c4c4c4",
    width: "100%",
    height: hp("0.2%"),
    margin: 30,
    alignSelf: "center",
  },
  title: {
    fontSize: hp("3%"),
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  subtitle: {
    fontSize: hp("2.4%"),
    fontWeight: "bold",
    textAlign: "justify",
    width: "100%",
  },
  subtitleItalic: {
    fontSize: hp("2.4%"),
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "justify",
    width: "100%",
    marginTop: 15,
  },
  subtitleUnder: {
    fontSize: hp("3%"),
    fontWeight: "bold",
    textDecorationLine: "underline",
    textAlign: "center",
    margin: 10,
  },
  textStyle: {
    fontSize: hp("2.4%"),
    flex: 0.2,
    fontStyle: "normal",
    paddingTop: 15,
    letterSpacing: 1.3,
    textAlign: "justify",
  },
  mainImageStyle: {
    width: wp("85%"),
    height: hp("24%"),
    margin: 10,
  },
  mainImageMH: {
    width: wp("75%"),
    height: hp("30%"),
    margin: 15,
  },
  mainImageLogin: {
    width: wp("100%"),
    height: hp("20%"),
    margin: 10,
  },
  button: {
    backgroundColor: "#713C6A",
    padding: 12,
    alignSelf: "flex-end",
    borderRadius: 15,
    marginTop: 30,
  },
  textButton: {
    color: "white",
    fontSize: 16,
  },
  item: {
    padding: 7,
    fontSize: hp("1.6%"),
    letterSpacing: 1.3,
  },
  listContainer: {
    flex: 1,
    marginBottom: 10,
    width: "100%",
  },
  linkContainer: {
    alignItems: "flex-start",
    marginTop: 10,
  },
  linkRecoverContainer: {
    alignItems: "flex-end",
    paddingRight: 30,
  },
  linkText: {
    color: "#713C6A",
    fontSize: hp('1.9%'),
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  registerContainer: {
    alignItems: "center",
    marginTop: 25,
  },
  registerText: {
    fontSize: hp('1.9%'),
    color: "darkgray",
  },
  registerLink: {
    color: "#713C6A",
  },
});
