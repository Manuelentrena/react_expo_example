import { useState } from "react";
/* DEPENDENCIES */
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
/* COMPONENTS */
import Toast from "react-native-toast-message";
import InfoUser from "./InfoUser";
/* STYLES */
import { styles } from "./UserLoggedStyle";

export default function UserLogged() {
  const [isLoading, setIsLoading] = useState(false);
  const auth = getAuth();
  const navigation = useNavigation();

  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        navigation.navigate("Account");
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
    <View style={styles.viewUserInfo}>
      <InfoUser />
      <Button
        title="CERRAR SESION"
        onPress={logout}
        buttonStyle={styles.button}
        containerStyle={styles.containerButton}
        loading={isLoading}
      />
    </View>
  );
}
