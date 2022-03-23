import { Image, Text, ScrollView, StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import React from "react";

const styles = StyleSheet.create({
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
    backgroundColor: "#008800",
  },
  containerButton: {
    marginTop: 30,
    width: "70%",
  },
});

export default function UserGuest() {
  return (
    <ScrollView centerContent={true} style={styles.scrollview}>
      <Image
        style={styles.image}
        source={require("../../assets/cuenta_usuario_invitado.webp")}
        resizeMode="contain"
      ></Image>
      <Text style={styles.text}>UserGuest</Text>
      <View style={styles.viewButton}>
        <Button
          title="BOTON"
          buttonStyle={styles.button}
          containerStyle={styles.containerButton}
          onPress={() => console.log("hola")}
        />
      </View>
    </ScrollView>
  );
}
