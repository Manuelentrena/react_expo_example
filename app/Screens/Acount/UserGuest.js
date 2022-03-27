import { Image, Text, ScrollView, View } from "react-native";
import { Button } from "react-native-elements";
import { styles } from "./UserGuestStyle";
import React from "react";

export default function UserGuest() {
  return (
    <ScrollView centerContent={true} style={styles.scrollview}>
      <Image
        style={styles.image}
        source={require("../../../assets/cuenta_usuario_invitado.webp")}
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
