/* SCREENS */
import Options from "../../Screens/Options/Options";
import { stylesStack } from "../StacksStyles";

export const screens = [
  {
    name: "Options",
    Component: Options,
    options: {
      title: "OPCIONES",
      headerTitleStyle: stylesStack.headerTitleStyle,
      headerStyle: stylesStack.headerStyle,
    },
  },
];
