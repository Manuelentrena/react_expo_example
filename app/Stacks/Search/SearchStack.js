import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screens } from "./routes";

const Stack = createNativeStackNavigator();

export default function SearchStack() {
  return (
    <Stack.Navigator>
      {screens.map(({ name, Component, title }) => (
        <Stack.Screen
          key={name}
          name={name}
          component={Component}
          options={{ title }}
        />
      ))}
    </Stack.Navigator>
  );
}