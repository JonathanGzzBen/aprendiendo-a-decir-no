import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/Navigation/AuthStack";

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}