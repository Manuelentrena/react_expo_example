import { Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../../styles/global";

export default function Item({ item, handlerPressItem }) {
  return (
    <TouchableOpacity onPress={() => handlerPressItem(item.key)}>
      <Text style={globalStyles.text}>{item.text}</Text>
    </TouchableOpacity>
  );
}
