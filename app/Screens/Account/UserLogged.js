/* DEPENDENCIES */
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
/* COMPONENTS */
import InfoUser from "./InfoUser";
import UserLoggedOptions from "./UserLoggedOptions";
/* STYLES */
import { styles } from "./UserLoggedStyle";
/* HOOKS */
import useFirebaseStorage from "../../Hooks/useFirebaseStorage";

export default function UserLogged({ logout, isLoadingLogout }) {
  const {
    uploadImage,
    updateAvatar,
    isLoadAvatar,
    currentUser,
    getUser,
    updateName,
    changeEmail,
  } = useFirebaseStorage();
  const navigation = useNavigation();

  const handleLogout = async () => {
    const res = await logout();
    if (res) navigation.navigate("Account");
  };

  return (
    <View style={styles.viewUserInfo}>
      <InfoUser
        uploadImage={uploadImage}
        updateAvatar={updateAvatar}
        isLoadAvatar={isLoadAvatar}
        currentUser={currentUser}
      />
      <UserLoggedOptions
        currentUser={currentUser}
        getUser={getUser}
        updateName={updateName}
        changeEmail={changeEmail}
      />
      <Button
        title="CERRAR SESION"
        onPress={handleLogout}
        buttonStyle={styles.button}
        containerStyle={styles.containerButton}
        loading={isLoadingLogout}
      />
    </View>
  );
}
