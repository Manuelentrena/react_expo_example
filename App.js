import { useEffect } from "react";
import Navigation from "./app/Navigation/Navigation";
import { firebaseApp } from "./app/common/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["AsyncStorage has been extracted"]);
LogBox.ignoreAllLogs();

export default function App() {
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        console.log("AUTENTICADO");
        // ...
      } else {
        console.log("NO AUTENTICADO");
      }
    });
  }, []);

  return <Navigation />;
}
