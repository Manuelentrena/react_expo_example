/* SCREENS */
import Account from "../../Screens/Acount/Acount";
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
];
