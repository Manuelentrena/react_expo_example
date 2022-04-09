import { StyleSheet } from "react-native";
import color from "../../styles/color";

export const styles = StyleSheet.create({
  scrollview: {
    marginLeft: 30,
    marginRight: 30,
  },
  image: {
    height: 300,
    width: "100%",
  },
  text: {
    fontWeight: "bold",
    fontSize: 19,
    textAlign: "center",
    margin: 0,
  },
  viewButton: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    backgroundColor: color.primary,
  },
  containerButton: {
    marginTop: 30,
    width: "70%",
  },
});
