import { useEffect, useState } from "react";
/* DEPENDENCIES */
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { Avatar } from "react-native-elements";
import { getAuth, updateProfile } from "firebase/auth";
import color from "../../styles/color";
/* COMPONENTS */
import AvatarDefault from "../../../assets/avatar-default.jpg";
/* HOOKS */
import useMediaLibrary from "../../Hooks/useMediaLibrary";
import useFirebaseStorage from "../../Hooks/useFirebaseStorage";

export default function InfoUser() {
  const { handleImage, uri } = useMediaLibrary();
  const { uploadImage, isLoadAvatar } = useFirebaseStorage();

  const { currentUser } = getAuth();
  const { email, photoURL, displayName, uid } = currentUser;

  useEffect(() => {
    if (uri) {
      console.log("CARGANDO");
      showAvatar({ uri, uid, folder: "avatar" });
    }
  }, [uri]);

  const showAvatar = async ({ uri, uid, folder }) => {
    const newUrlImagen = await uploadImage({ uri, uid, folder });
    console.log({ newUrlImagen });
    if (newUrlImagen) {
      updateProfile(currentUser, {
        photoURL: newUrlImagen,
      })
        .then(() => {
          console.log("Perfil Actualizado");
        })
        .catch((error) => {
          console.log("fallo al actualziar");
        });
    }
  };

  return (
    <View style={styles.viewUserInfo}>
      {isLoadAvatar ? (
        <ActivityIndicator
          animating={true}
          size="large"
          style={{ opacity: 1 }}
          color="#999999"
        />
      ) : (
        <Avatar
          size="large"
          rounded
          source={{ uri: photoURL }}
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
});
