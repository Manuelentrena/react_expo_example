import { lazy } from "react";
import TabButton from "./TabButton";

const LazyStackHome = lazy(() => import("../Stacks/Home/HomeStack"));
const LazyStackSearch = lazy(() => import("../Stacks/Search/SearchStack"));
const LazyStackAccount = lazy(() => import("../Stacks/Account/AccountStack"));

export const routes = [
  {
    name: "StackHome",
    Component: LazyStackHome,
    options: {
      tabBarLabel: "INICIO",
      headerShown: false,
      tabBarButton: (props) => <TabButton {...props} title="INICIO" />,
    },
  },
  {
    name: "StackSearch",
    Component: LazyStackSearch,
    options: {
      tabBarLabel: "BUSCADOR",
      headerShown: false,
      tabBarButton: (props) => <TabButton {...props} title="BUSCADOR" />,
    },
  },
  {
    name: "StackAccount",
    Component: LazyStackAccount,
    options: {
      tabBarLabel: "PERFIL",
      headerShown: false,
      tabBarButton: (props) => <TabButton {...props} title="PERFIL" />,
    },
  },
];
