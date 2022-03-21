import React from "react";
import { ActivityIndicator, View } from "react-native";
import { styles } from "./LoaderStyles";

export default function Loader() {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" />
    </View>
  );
}
