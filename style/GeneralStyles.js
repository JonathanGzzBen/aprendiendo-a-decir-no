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
    fontSize: hp("2.7%"),
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  subtitle: {
    fontSize: hp("2%"),
    fontWeight: "bold",
    textAlign: "justify",
    width: "100%",
  },
  subtitleItalic: {
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "justify",
    width: "100%",
    marginTop: 15,
  },
  textStyle: {
    fontSize: 14,
    flex: 0.2,
    fontStyle: "normal",
    paddingTop: 15,
    letterSpacing: 1.3,
    textAlign: "justify",
  },
  mainImageStyle: {
    width: wp("85%"),
    height: hp("20%"),
    margin: 10,
  },
  mainImageMH: {
    width: wp("75%"),
    height: hp("30%"),
    margin: 15,
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
  linkText: {
    color: "#713C6A",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
});
