import { useState, useEffect } from "react";
/* DEPENDENCIES */
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
/* COMPONENTS */
import IconPassword from "./IconPassword";
import Toast from "react-native-toast-message";
/* GLOBAL */
import color from "../../styles/color";
/* UTILS */
import {
  validateEmail,
  validateNull,
  validateNotMinLength,
} from "../../utils/validations";

const INICIALSTATE = {
  email: "",
  password: "",
};

const ERRORES = {
  email: "Email Inválido",
  obligatorio: "Password Obligatorio, (Min 8 caracteres)",
};

const EXITOS = {
  email: "Email Válido",
  obligatorio: "Contraseña Válida",
};

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorEmail, setErrorEmail] = useState(true);
  const [errorPassword, setErrorPassword] = useState(true);
  const [isSubmitDisable, setIsSubmitDisable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(INICIALSTATE);

  const auth = getAuth();
  const navigation = useNavigation();

  useEffect(() => {
    if (errorEmail || errorPassword) {
      setIsSubmitDisable(true);
    } else {
      setIsSubmitDisable(false);
    }
  }, [formData]);

  const onChange = ({ nativeEvent }, type) => {
    setFormData({ ...formData, [type]: nativeEvent.text });

    if (type === "email") {
      setErrorEmail(!validateEmail(nativeEvent.text));
    }

    if (type === "password") {
      setErrorPassword(
        validateNull(nativeEvent.text) || validateNotMinLength(nativeEvent.text)
      );
    }
  };

  const onSubmit = () => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then(({ user }) => {
        setIsLoading(false);
        navigation.navigate("Account");
        return Toast.show({
          type: "success",
          text1: `Bienvenido ${user.email}`,
        });
      })
      .catch((error) => {
        setIsLoading(false);
        return Toast.show({
          type: "error",
          text1: error.code,
        });
      });
  };

  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Email..."
        containerStyle={styles.inputForm}
        onChange={(e) => onChange(e, "email")}
        errorStyle={{ color: errorEmail ? "red" : "green" }}
        errorMessage={
          formData.email === ""
            ? null
            : errorEmail
            ? ERRORES.email
            : EXITOS.email
        }
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.iconStyleInput}
          />
        }
      />
      <Input
        placeholder="Password..."
        containerStyle={styles.inputForm}
        secureTextEntry={!showPassword}
        onChange={(e) => onChange(e, "password")}
        errorStyle={{ color: errorPassword ? "red" : "green" }}
        errorMessage={
          formData.password === ""
            ? null
            : errorPassword
            ? ERRORES.obligatorio
            : EXITOS.obligatorio
        }
        rightIcon={
          <IconPassword show={showPassword} setShow={setShowPassword} />
        }
      />
      <Button
        title="Iniciar Sesión"
        containerStyle={styles.btnContainerLogin}
        buttonStyle={styles.btnRegister}
        onPress={onSubmit}
        disabled={isSubmitDisable}
        loading={isLoading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  inputForm: {
    width: "100%",
    marginTop: 20,
  },
  btnContainerLogin: {
    marginTop: 20,
    width: "95%",
  },
  btnRegister: {
    backgroundColor: color.primary,
  },
  iconStyleInput: {
    color: color.gray,
  },
});
