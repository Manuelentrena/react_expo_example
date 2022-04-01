import { Image, Text, ScrollView, View } from "react-native";
import { Button } from "react-native-elements";
import { styles } from "./UserGuestStyle";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function UserGuest() {
  const navigation = useNavigation();
  return (
    <ScrollView centerContent={true} style={styles.scrollview}>
      <Image
        style={styles.image}
        source={require("../../../assets/avatar.png")}
        resizeMode="contain"
      ></Image>
      <Text style={styles.text}>UserGuest</Text>
      <View style={styles.viewButton}>
        <Button
          title="VER TU PERFIL"
          buttonStyle={styles.button}
          containerStyle={styles.containerButton}
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </ScrollView>
  );
}
