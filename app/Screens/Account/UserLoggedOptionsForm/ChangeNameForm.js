import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Icon, Input, Button } from "react-native-elements";
import color from "../../../styles/color";

const ERRORES = {
  name: "No puede ser nulo, o el mismo",
};

const EXITOS = {
  name: "Nombre nuevo válido!",
};

export default function ChangeNameForm({
  name,
  setIsOpenModal,
  getUser,
  updateName,
}) {
  const [newName, setNewName] = useState(name ?? "");
  const [errorName, setErrorName] = useState(name ? false : true);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeName = ({ nativeEvent: { text } }) => {
    setNewName(text);

    if (text === name || text === "") {
      setErrorName(true);
    } else {
      setErrorName(false);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const res = await updateName(newName);
    setIsLoading(false);
    if (res) {
      getUser();
      setIsOpenModal(false);
    }
  };

  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Name..."
        containerStyle={styles.inputForm}
        defaultValue={newName}
        onChange={handleChangeName}
        errorStyle={{ color: errorName ? "red" : "green" }}
        errorMessage={errorName ? ERRORES.name : EXITOS.name}
        rightIcon={
          <Icon
            type="material-community"
            name="account-circle-outline"
            iconStyle={styles.iconStyleInput}
          />
        }
      />
      <Button
        title="CAMBIAR NOMBRE"
        containerStyle={styles.btnContainerLogin}
        buttonStyle={styles.btnGuardar}
        disabled={errorName}
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
