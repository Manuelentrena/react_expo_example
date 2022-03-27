/* SCREENS */
import Search from "../../Screens/Search/Search";
import Map from "../../Screens/Map/Map";
import Store from "../../Screens/Store/Store";
import { stylesStack } from "../StacksStyles";

export const screens = [
  {
    name: "Search",
    Component: Search,
    options: {
      title: "BUSCADOR",
      headerTitleStyle: stylesStack.headerTitleStyle,
      headerStyle: stylesStack.headerStyle,
    },
  },
  {
    name: "Map",
    Component: Map,
    options: {
      title: "MAPA",
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
