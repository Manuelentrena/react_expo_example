/* NAVIGATION */
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
/* ROUTES */
import { routes } from "./routes";
import { Suspense } from "react";
import Loader from "../components/Loader/Loader";
/* STYLES */
import { styles } from "./NavigationStyles";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Suspense fallback={<Loader text={"CARGANDO..."} />}>
        <Tab.Navigator
          optimizationsEnabled={true}
          screenOptions={{
            tabBarStyle: styles.navigator,
            headerShown: false,
            tabBarHideOnKeyboard: true,
          }}
        >
          {routes.map(({ name, Component, options }) => (
            <Tab.Screen
              key={name}
              name={name}
              component={Component}
              options={options}
            />
          ))}
        </Tab.Navigator>
      </Suspense>
    </NavigationContainer>
  );
}
