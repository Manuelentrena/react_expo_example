import { useState, useEffect } from "react";
/* DEPENDENCIES */
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
/* COMPONENTS */
import Toast from "react-native-toast-message";
import IconPassword from "./IconPassword";
/* UTILS */
import {
  validateEmail,
  validateNull,
  validateNotMinLength,
  validateIsNotSame,
} from "../../utils/validations";
import color from "../../styles/color";

const INICIALSTATE = {
  email: "",
  password: "",
  passwordRepeat: "",
};

const ERRORES = {
  email: "Email Inválido",
  obligatorio: "Password Obligatorio, (Min 8 caracteres)",
  diferentes: "Passwords diferentes",
};

const EXITOS = {
  email: "Email Válido",
  obligatorio: "Password Correcto",
  diferentes: "Passwords Iguales",
};

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
  const [errorEmail, setErrorEmail] = useState(true);
  const [errorPassword, setErrorPassword] = useState(true);
  const [errorPasswordRepeat, setErrorPasswordRepeat] = useState(true);
  const [isSubmitDisable, setIsSubmitDisable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(INICIALSTATE);

  const auth = getAuth();
  const navigation = useNavigation();

  useEffect(() => {
    if (errorEmail || errorPassword || errorPasswordRepeat) {
      setIsSubmitDisable(true);
    } else {
      setIsSubmitDisable(false);
    }
  }, [formData]);

  const onSubmit = () => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then(({ user }) => {
        setIsLoading(false);
        navigation.navigate("Account");
        return Toast.show({
          type: "success",
          text1: `Cuenta ${user.email} registrada!`,
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

  const onChange = ({ nativeEvent }, type) => {
    setFormData({ ...formData, [type]: nativeEvent.text });

    if (type === "email") {
      setErrorEmail(!validateEmail(nativeEvent.text));
    }

    if (type === "password") {
      setErrorPassword(
        validateNull(nativeEvent.text) || validateNotMinLength(nativeEvent.text)
      );
      setErrorPasswordRepeat(
        validateIsNotSame(nativeEvent.text, formData.passwordRepeat)
      );
    }

    if (type === "passwordRepeat") {
      setErrorPasswordRepeat(
        validateIsNotSame(nativeEvent.text, formData.password)
      );
    }
  };

  return (
    <View style={styles.viewForm}>
      <Input
        placeholder="Email..."
        containerStyle={styles.inputForm}
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
        onChange={(e) => onChange(e, "email")}
      />
      <Input
        placeholder="Password..."
        containerStyle={styles.inputForm}
        secureTextEntry={!showPassword}
        rightIcon={
          <IconPassword show={showPassword} setShow={setShowPassword} />
        }
        onChange={(e) => onChange(e, "password")}
        errorStyle={{ color: errorPassword ? "red" : "green" }}
        errorMessage={
          formData.password === ""
            ? null
            : errorPassword
            ? ERRORES.obligatorio
            : EXITOS.obligatorio
        }
      />
      <Input
        placeholder="Repeat Password..."
        containerStyle={styles.inputForm}
        secureTextEntry={!showPasswordRepeat}
        rightIcon={
          <IconPassword
            show={showPasswordRepeat}
            setShow={setShowPasswordRepeat}
          />
        }
        onChange={(e) => onChange(e, "passwordRepeat")}
        errorStyle={{ color: errorPasswordRepeat ? "red" : "green" }}
        errorMessage={
          formData.passwordRepeat === ""
            ? null
            : errorPasswordRepeat
            ? ERRORES.diferentes
            : EXITOS.diferentes
        }
      />
      <Button
        title="REGISTRATE"
        containerStyle={styles.containerBtnRegister}
        buttonStyle={styles.btnRegister}
        onPress={onSubmit}
        disabled={isSubmitDisable}
        loading={isLoading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewForm: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  inputForm: {
    width: "100%",
    marginTop: 20,
  },
  containerBtnRegister: {
    marginTop: 20,
    width: "94%",
  },
  btnRegister: {
    backgroundColor: color.primary,
  },
  iconStyleInput: {
    color: color.gray,
  },
});
