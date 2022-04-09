/* DEPENDENCIES */
import { View, Image } from "react-native";
import RegisterForm from "../../components/Account/RegisterForm";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
/* STYLES */
import { styles } from "./RegisterStyles";

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
