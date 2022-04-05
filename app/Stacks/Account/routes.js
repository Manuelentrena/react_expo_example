/* SCREENS */
import Account from "../../Screens/Account/Account";
import Login from "../../Screens/Account/Login";
import Register from "../../Screens/Account/Register";
import { stylesStack } from "../StacksStyles";

export const screens = [
  {
    name: "Account",
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
