import { View, Text, Button } from "react-native";

export default function Store({ navigation }) {
  const handlerPress = () => {
    navigation.goBack();
  };

  return (
    <View>
      <Text>Store</Text>
      <Button title="BACK" onPress={handlerPress} />
    </View>
  );
}
