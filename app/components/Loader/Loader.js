import React from "react";
import { ActivityIndicator, View, Text } from "react-native";
/* import { Overlay } from "react-native-elements"; */
import { styles } from "./LoaderStyles";

export default function Loader({ text }) {
  return (
    <View style={styles.view}>
      <ActivityIndicator size="large" />
      {text && <Text style={styles.text}>{text}</Text>}
    </View>
  );
}
{
  /* <Overlay style={styles.overlay} isVisible={isVisible}></Overlay>
</Overlay> */
}
