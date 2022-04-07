import { useState } from "react";
/* DEPENDENCIES */
import {
  getAuth,
  updateProfile,
  updateEmail,
  EmailAuthProvider,
} from "firebase/auth";
import Toast from "react-native-toast-message";
/* SERVICES */
import { ImageStorage } from "../services/ImageStorage";

const getInfoUser = () => {
  const { currentUser } = getAuth();
  return currentUser;
};

export default function useFirebaseStorage() {
  const [isLoadAvatar, setIsLoadAvatar] = useState(false);
  const [isChangeInfo, setIsChangeInfo] = useState(false);
  const [currentUser, setCurrentUser] = useState(getInfoUser());

  const getUser = async () => {
    setCurrentUser(getInfoUser());
  };

  const uploadImage = async ({ uri, folder }) => {
    setIsLoadAvatar(true);
    const res = await fetch(uri);
    const blob = await res.blob();

    return ImageStorage({ uid: currentUser.uid, file: blob, folder })
      .then((newUrlImagen) => {
        return newUrlImagen;
      })
      .catch(() => {
        Toast.show({
          type: "error",
          text1: "Problema con el servidor",
        });
        setIsLoadAvatar(false);
        return false;
      });
  };

  const updateAvatar = async (newUrlImagen) => {
    return updateProfile(currentUser, {
      photoURL: newUrlImagen,
    })
      .then(() => {
        Toast.show({
          type: "success",
          text1: "Avatar Actualizado!",
        });
        setIsLoadAvatar(false);
        return true;
      })
      .catch((error) => {
        Toast.show({
          type: "error",
          text1: error.code,
        });
        setIsLoadAvatar(false);

        return false;
      });
  };

  const updateName = async (newName) => {
    setIsChangeInfo(true);
    return updateProfile(currentUser, {
      displayName: newName,
    })
      .then(() => {
        Toast.show({
          type: "success",
          text1: "Nombre Actualizado!",
        });
        setIsChangeInfo(false);
        return true;
      })
      .catch((error) => {
        Toast.show({
          type: "error",
          text1: error.code,
        });
        setIsChangeInfo(false);
        return false;
      });
  };

  const changeEmail = async ({ newEmail, password, email }) => {
    setIsChangeInfo(true);
    const credential = getCredential({ email, password });
    console.log({ credential });
    updateEmail(auth.currentUser, newEmail)
      .then(() => {
        Toast.show({
          type: "success",
          text1: "Email Actualizado!",
        });
        setIsChangeInfo(false);
        return true;
      })
      .catch((error) => {
        Toast.show({
          type: "error",
          text1: error.code,
        });
        setIsChangeInfo(false);
        return false;
      });
  };

  const getCredential = ({ email, password }) => {
    return EmailAuthProvider.credential(email, password);
  };

  return {
    uploadImage /* Subir a firebase la imagen en storage */,
    updateName /* Cambiar Nombre */,
    changeEmail /* Cambiar Email */,
    isChangeInfo /* Loader de cualquier campo menos avatar */,
    updateAvatar /* Actualizar la foto de la storage */,
    isLoadAvatar /* Loader de avatar */,
    getUser /* Para refrescar el estado */,
    currentUser /* El estado de user */,
  };
}
