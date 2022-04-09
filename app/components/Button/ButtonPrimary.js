import { Button } from "react-native-elements";
import React from "react";

export default function ButtonPrimary({ title, onPress }) {
  return (
    <Button
      onPress={onPress}
      title={title}
      buttonStyle={{
        backgroundColor: "rgba(78, 116, 289, 1)",
        borderRadius: 3,
      }}
      containerStyle={{
        width: 200,
        marginHorizontal: 50,
        marginVertical: 10,
      }}
    />
  );
}
