import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'; 

export default StyleSheet.create({
  buttonStyle: {
    height: 110,
    width: 100,
    flex: 0.5,
    alignContent: "center",
    borderWidth: 2,
    borderColor: "#713C6A",
    justifyContent: "center",
    backgroundColor: "rgba(248, 236, 223, 0.3)",
    borderRadius: 15,
    marginTop: 20,
    margin: 10,
  },
  buttonImageIconStyle: {
    height: 32,
    width: 32,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  buttonTextStyle: {
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
  },
});
