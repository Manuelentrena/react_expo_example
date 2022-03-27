import { useState } from "react";
import { View, Text, FlatList, Alert, Keyboard } from "react-native";
import { globalStyles } from "../../styles/global";
import Item from "./Item";
import AddItem from "./AddItem";
import CloseKeyboard from "../../components/CloseKeyboard/CloseKeyboard";

export default function Home({ navigation }) {
  const [todos, setTodos] = useState([
    { text: "aaaaaa", key: "1" },
    { text: "bbbbbb", key: "2" },
    { text: "cccccc", key: "3" },
  ]);
  const [cleanInput, setCleanInput] = useState(false);

  const handlerPressItem = (key) => {
    setTodos((prevState) => prevState.filter((item) => item.key !== key));
  };

  const handleCreateItem = (text) => {
    if (text.length > 3) {
      setTodos((prevState) => [{ text, key: Math.random() }, ...prevState]);
      Keyboard.dismiss();
      setCleanInput(true);
    } else {
      Alert.alert("ERROR", "longitud mínima de 3", [{ text: "OK" }]);
    }
  };

  return (
    <CloseKeyboard>
      <View style={globalStyles.container}>
        <View style={globalStyles.content}>
          <AddItem
            handleCreateItem={handleCreateItem}
            cleanInput={cleanInput}
          />
          <View style={globalStyles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <Item item={item} handlerPressItem={handlerPressItem} />
              )}
            />
          </View>
        </View>
      </View>
    </CloseKeyboard>
  );
}
