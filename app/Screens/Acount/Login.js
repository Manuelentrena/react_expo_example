import { View, Text, ScrollView, Image } from "react-native";
/* ELEMENTES */
import { Divider } from "react-native-elements";
/*  STYLES */
import { styles } from "./LoginStyle";
import color from "../../styles/color";
/* NAVIGATION */
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  return (
    <ScrollView>
      <Image
        style={styles.loginLogo}
        source={require("../../../assets/avatar.png")}
        resizeMode="contain"
      />
      <View style={styles.loginForm}>
        <Text>Login</Text>
        <CreateAccount />
      </View>
      <Divider style={styles.divider} color={color.primary} />
    </ScrollView>
  );
}

function CreateAccount() {
  const navigation = useNavigation();

  const handlerClickRegister = () => {
    navigation.navigate("Register");
  };
  return (
    <Text style={styles.textRegister}>
      ¿Aún no tienes cuenta?
      <Text style={styles.btnRegister} onPress={handlerClickRegister}>
        {" "}
        Registrate!
      </Text>
    </Text>
  );
}
