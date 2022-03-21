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
      <Suspense fallback={<Loader />}>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: styles.navigator,
            tabBarShowLabel: false,
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
