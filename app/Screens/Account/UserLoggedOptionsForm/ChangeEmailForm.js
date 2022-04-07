import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Icon, Input, Button } from "react-native-elements";
import IconPassword from "../../../components/Account/IconPassword";

import {
  validateEmail,
  validateNotMinLength,
} from "../../../utils/validations";
import color from "../../../styles/color";

const ERRORES = {
  email: "Email incorrecto",
  password: "Contraseña min 8 caracteres",
};

const EXITOS = {
  email: "Email nuevo válido!",
  password: "Contraseña validada!",
};

export default function ChangeEmailForm({
  email,
  changeEmail,
  setIsOpenModal,
  getUser,
}) {
  const [newEmail, setNewEmail] = useState(email ?? "");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorEmail, setErrorEmail] = useState(email ? false : true);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangePassword = ({ nativeEvent: { text } }) => {
    setPassword(text);

    if (validateNotMinLength(text)) {
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
    }
  };

  const handleChangeEmail = ({ nativeEvent: { text } }) => {
    setNewEmail(text);

    if (!validateEmail(text)) {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const res = await changeEmail({ newEmail, password, email });
    setIsLoading(false);
    if (res) {
      getUser();
      setIsOpenModal(false);
    }
  };

  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Email..."
        containerStyle={styles.inputForm}
        defaultValue={newEmail}
        onChange={handleChangeEmail}
        errorStyle={{ color: errorEmail ? "red" : "green" }}
        errorMessage={errorEmail ? ERRORES.email : EXITOS.email}
        rightIcon={
          <Icon
            type="material-community"
            name="email-outline"
            iconStyle={styles.iconStyleInput}
          />
        }
      />
      <Input
        placeholder="Password..."
        containerStyle={styles.inputForm}
        onChange={handleChangePassword}
        errorStyle={{ color: errorPassword ? "red" : "green" }}
        secureTextEntry={!showPassword}
        errorMessage={
          password === ""
            ? null
            : errorPassword
            ? ERRORES.password
            : EXITOS.password
        }
        rightIcon={
          <IconPassword show={showPassword} setShow={setShowPassword} />
        }
      />
      <Button
        title="CAMBIAR EMAIL"
        containerStyle={styles.btnContainerLogin}
        buttonStyle={styles.btnGuardar}
        disabled={errorEmail}
        onPress={handleSubmit}
        loading={isLoading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 20,
  },
  inputForm: {
    width: "100%",
  },
  btnContainerLogin: {
    marginTop: 20,
    width: "95%",
  },
  btnGuardar: {
    width: "100%",
    backgroundColor: color.primary,
  },
  iconStyleInput: {
    color: color.gray,
  },
});
