import React from "react";
import { StyleSheet, Text as RNText } from "react-native";
import colors from "../../styles/color";

const styles = StyleSheet.create({
  defaultText: {
    color: colors.primary,
    fontSize: 18,
  },
});

export default function Text({ children, style = {} }) {
  const textStyles = [styles.defaultText];
  textStyles.push(style);
  return <RNText style={textStyles}>{children}</RNText>;
}
