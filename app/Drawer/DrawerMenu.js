import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { useWindowDimensions } from "react-native";
import DrawerCustom from "./DrawerCustom";
import Home from "../Screens/Home/Home";
import Options from "../Screens/Options/Options";
import { FontAwesome5 } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function DrawerMenu() {
  const dimensions = useWindowDimensions();

  const isLargeScreen = dimensions.width >= 768;

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <DrawerCustom {...props} />}
        screenOptions={{
          drawerPosition: "right",
          drawerType: "front",
          drawerStyle: isLargeScreen ? { width: "100%" } : { width: "70%" },
          overlayColor: "rgba(0, 0, 0, 0.5)",
          drawerActiveBackgroundColor: "#8200d6",
          drawerActiveTintColor: "#fff",
          drawerInactiveTintColor: "#333",
          drawerLabelStyle: {
            marginLeft: -25,
            fontFamily: "Montserrat-Regular",
            fontSize: 15,
          },
          headerShown: false,
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({ color }) => (
              <FontAwesome5 name="home" size={18} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Options"
          component={Options}
          options={{
            drawerIcon: ({ color }) => (
              <FontAwesome5 name="angry" size={18} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
