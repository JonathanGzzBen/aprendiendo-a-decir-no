import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  divider: {
    backgroundColor: "#c4c4c4",
    width: "90%",
    height: hp("0.3%"),
    alignSelf: "center",
    margin: 8,
  },
  avatar: {
    margin: 10,
    alignSelf: "center",
  },
  userContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  title: {
    fontSize: hp('2.7%'),
    paddingStart: 35,
    paddingTop: 20,
    paddingBottom: 20,
    fontWeight: "bold",
  },
  res: {
    fontSize: hp('1.8%'),
    paddingLeft: 20,
    fontWeight: "600",
    color: "#101010",
  },
  userTitle: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: hp("3%"),
  },
  userSubTitulo: {
    textAlign: "center",
    fontSize: hp("2.2%"),
    color: "#713C6A",
    fontWeight: "500",
    paddingVertical: 5,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 35,
    alignItems: 'center'
  },
});
