import Navigation from "./app/Navigation/Navigation";
import { firebaseApp } from "./app/constant/firebase";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["AsyncStorage has been extracted"]);
LogBox.ignoreAllLogs();

export default function App() {
  return <Navigation />;
}
