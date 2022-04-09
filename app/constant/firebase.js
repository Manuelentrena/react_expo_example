import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdRGp0zd_Bmz_5xYDFGpKRXkD9-X6rraA",
  authDomain: "app-rutas-native.firebaseapp.com",
  projectId: "app-rutas-native",
  storageBucket: "app-rutas-native.appspot.com",
  messagingSenderId: "301618498455",
  appId: "1:301618498455:web:f655bec58324e1d74712d2",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
