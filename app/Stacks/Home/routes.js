/* SCREENS */
import Home from "../../Screens/Home/Home";
import Store from "../../Screens/Store/Store";
import { stylesStack } from "../StacksStyles";

export const screens = [
  {
    name: "Home",
    Component: Home,
    options: {
      title: "INICIO",
      headerTitleStyle: stylesStack.headerTitleStyle,
      headerStyle: stylesStack.headerStyle,
    },
  },
  {
    name: "Store",
    Component: Store,
    options: {
      title: "TIENDA",
      headerTitleStyle: stylesStack.headerTitleStyle,
      headerStyle: stylesStack.headerStyle,
    },
  },
];
