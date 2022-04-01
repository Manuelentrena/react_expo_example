/* SCREENS */
import Account from "../../Screens/Acount/Acount";
import Login from "../../Screens/Acount/Login";
import Register from "../../Screens/Acount/Register";
import { stylesStack } from "../StacksStyles";

export const screens = [
  {
    name: "Perfil usuario",
    Component: Account,
    options: {
      title: "PERFIL USUARIO",
      headerTitleStyle: stylesStack.headerTitleStyle,
      headerStyle: stylesStack.headerStyle,
    },
  },
  {
    name: "Login",
    Component: Login,
    options: {
      title: "LOGIN",
      headerTitleStyle: stylesStack.headerTitleStyle,
      headerStyle: stylesStack.headerStyle,
    },
  },
  {
    name: "Register",
    Component: Register,
    options: {
      title: "REGISTER",
      headerTitleStyle: stylesStack.headerTitleStyle,
      headerStyle: stylesStack.headerStyle,
    },
  },
];
