import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
  },
  profileContainer: {
    padding: 20,
  },
  drawerContainer: {
    backgroundColor: "#713C6A",
  },
  avatar: {
    width: wp("20%"),
    height: hp("10%"),
    borderRadius: 40,
    marginBottom: 10,
  },
  title: {
    fontSize: hp("2.5%"),
    fontWeight: "700",
    marginBottom: 5,
    color: "#fff",
  },
  subtitle: {
    fontSize: hp("2%"),
    fontWeight: "400",
    color: "#fff",
  },
  drawerLabel: {
    fontSize: hp("1.8%"),
  },
});
