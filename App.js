import Navigation from "./app/Navigation/Navigation";
import { useFonts } from "expo-font";
import { firebaseApp } from "./app/constant/firebase";
import { LogBox } from "react-native";
/* import AppLoading from 'expo-app-loading'; */

LogBox.ignoreLogs(["AsyncStorage has been extracted"]);
LogBox.ignoreAllLogs();

export default function App() {
  const [loaded] = useFonts({
    "Montserrat-Black": require("./assets/fonts/Montserrat/Montserrat-Black.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return <Navigation />;
}
