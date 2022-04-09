import { useFonts } from "expo-font";
import { LogBox } from "react-native";
import Navigation from "./app/Navigation/Navigation";
/* import AppLoading from 'expo-app-loading'; */

LogBox.ignoreLogs(["AsyncStorage has been extracted"]);
LogBox.ignoreAllLogs();

export default function App() {
  console.log("flipado");
  const [loaded] = useFonts({
    "Montserrat-Black": require("./assets/fonts/Montserrat/Montserrat-Black.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return <Navigation />;
}
