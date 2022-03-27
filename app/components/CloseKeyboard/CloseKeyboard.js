import { TouchableWithoutFeedback, Keyboard } from "react-native";
import React from "react";

export default function CloseKeyboard({ children }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
}
