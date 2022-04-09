import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  contentContainerStyle: {
    backgroundColor: "#8200d6",
  },
  ImageBackground: {
    padding: 20,
    flex: 1,
    alignItems: "flex-end",
  },
  Image: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  TextName: {
    color: "white",
    fontFamily: "Montserrat-Black",
    fontSize: 18,
    marginBottom: 5,
  },
  TextCoins: {
    color: "white",
    fontFamily: "Montserrat-Regular",
    marginRight: 5,
  },
  ContainerIcons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  ContainerDrawerItemList: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
  },
});
