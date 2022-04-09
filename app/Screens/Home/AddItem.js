import { useState, useEffect } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import ButtonPrimary from "../../components/Button/ButtonPrimary";

export default function AddItem({ handleCreateItem, cleanInput = false }) {
  const [text, setText] = useState("");

  useEffect(() => {
    cleanInput && setText("");
  }, [cleanInput]);

  const handleChange = (newText) => {
    setText(newText);
  };

  return (
    <View>
      <TextInput
        style={styles.imput}
        placeholder="New Item..."
        onChangeText={handleChange}
        value={text}
      />
      <ButtonPrimary title="ADD ITEM" onPress={() => handleCreateItem(text)} />
    </View>
  );
}

const styles = StyleSheet.create({
  imput: {
    marginBottom: 10,
    paddingBottom: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  button: {},
});
