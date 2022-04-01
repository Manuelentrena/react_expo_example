import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "./Register.styles";
import RegisterForm from "../../components/Account/RegisterForm";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Register() {
  return (
    <KeyboardAwareScrollView>
      <Image
        style={styles.logoRegister}
        source={require("../../../assets/avatar.png")}
      />
      <View style={styles.viewForm}>
        <RegisterForm />
      </View>
    </KeyboardAwareScrollView>
  );
}
