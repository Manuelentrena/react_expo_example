import { useEffect } from "react";
/* DEPENDENCIES */
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { Avatar } from "react-native-elements";
import color from "../../styles/color";
/* COMPONENTS */
import AvatarDefault from "../../../assets/avatar-default.jpg";
/* HOOKS */
import useMediaLibrary from "../../Hooks/useMediaLibrary";

export default function InfoUser({
  uploadImage,
  updateAvatar,
  isLoadAvatar,
  currentUser,
}) {
  const { handleImage, uri } = useMediaLibrary();
  const { email, photoURL, displayName } = currentUser;

  useEffect(() => {
    if (uri) showAvatar({ uri, folder: "avatar" });
  }, [uri]);

  const showAvatar = async ({ uri, folder }) => {
    const newUrlImagen = await uploadImage({ uri, folder });
    if (newUrlImagen) updateAvatar(newUrlImagen);
  };

  return (
    <View style={styles.viewUserInfo}>
      {isLoadAvatar ? (
        <ActivityIndicator
          animating={true}
          size="large"
          style={styles.spinner}
          color="#999999"
        />
      ) : (
        <Avatar
          size="large"
          rounded
          source={photoURL ? { uri: photoURL } : AvatarDefault}
          containerStyle={[styles.userInfoAvatar, styles.btnAvatarShadow]}
        >
          <Avatar.Accessory
            size={24}
            onPress={handleImage}
            style={styles.btnAvatarShadow}
          />
        </Avatar>
      )}
      <View>
        <Text style={styles.infoUserText}>{displayName ?? "Sin Nombre"}</Text>
        <Text style={styles.infoUserText}>{email ?? "Sin Email"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewUserInfo: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: color.backgroundGray,
    paddingVertical: 30,
  },
  userInfoAvatar: {
    marginRight: 20,
  },
  infoUserText: {
    fontWeight: "bold",
    paddingBottom: 5,
  },
  btnAvatarShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  spinner: {
    opacity: 1,
    marginHorizontal: 30,
    marginVertical: 20,
  },
});
