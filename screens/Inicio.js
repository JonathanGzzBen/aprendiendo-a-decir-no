import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Inicio = ({navigation}) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={styles.container}>
          <Text style={styles.title}>Aprendiendo a decir que no</Text>
          <TouchableOpacity
            style={styles.buttonImage}
            activeOpacity={0.5}
            onPress={() => navigation.navigate('Introduccion', {name: 'Introduccion'})}>
            <Image
              source={{
                uri:
                  'https://i.imgur.com/oIQfSXx.jpg',
              }}
              style={styles.buttonImageIconStyle}
            />
          </TouchableOpacity>
            <Text style={styles.caption}>Introduccion</Text>
          <TouchableOpacity
            style={styles.buttonImage}
            activeOpacity={0.5}
            onPress={() => navigation.navigate('Pubertad', {name: 'Pubertad'})}>
            <Image
              source={{
                uri:
                  'https://i.imgur.com/lziFiyz.jpg',
              }}
              style={styles.buttonImageIconStyle}
            />
          </TouchableOpacity>
            <Text style={styles.caption}>Pubertad</Text>
            <TouchableOpacity
            style={styles.buttonImage}
            activeOpacity={0.5}
            onPress={() => navigation.navigate('Sexualidad', {name: 'Sexualidad'})}>
            <Image
              source={{
                uri:
                  'https://i.imgur.com/A8P5tj4.jpg',
              }}
              style={styles.buttonImageIconStyle}
            />
          </TouchableOpacity>
            <Text style={styles.caption}>Sexualidad</Text>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 10,
    margin: 10,
    padding: 30,
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign:'center',
  },
  buttonImage: {
    height: 100,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 0.4,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#713C6A",
    borderRadius: 10,
    marginTop: 30,
  },
  caption: {
    fontSize: 16,
    fontStyle: "normal",
    paddingTop: 15,
  },
  buttonImageIconStyle: {
    height: '100%',
    width: '100%',
    resizeMode:'contain',
  },
});

export default Inicio;
