import React from "react";
import Navigation from "./app/Navigation/Navigation";
import { useFonts } from "expo-font";
import { firebaseApp } from "./app/constant/firebase";
import { LogBox } from "react-native";
import DrawerMenu from "./app/Drawer/DrawerMenu";
import "react-native-gesture-handler";
import Toast from "react-native-toast-message";
import { toastConfig } from "./app/constant/ToastConfig";

/* IGNORAMOS ALGUNOS WARNINGS */
LogBox.ignoreLogs([
  "AsyncStorage has been extracted",
  "Warning: Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code.",
  "Warning: Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code.",
]);
LogBox.ignoreAllLogs();

export default function App() {
  const [loaded] = useFonts({
    "Montserrat-Black": require("./assets/fonts/Montserrat/Montserrat-Black.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat/Montserrat-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Navigation />
      <Toast config={toastConfig} />
    </>
  );
}
