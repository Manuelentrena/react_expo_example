import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Toast from "react-native-toast-message";

export const ImageStorage = async ({ uid, file, folder }) => {
  // Create a root reference
  const storage = getStorage();
  const storageRef = ref(storage, `${folder}/${uid}`);

  // 'file' comes from the Blob or File API
  return await uploadBytes(storageRef, file)
    .then((snapshot) => {
      return getURLImage(storageRef);
    })
    .catch(() => {
      Toast.show({
        type: "error",
        text1: "Fallo al subir Imagen",
      });
      return false;
    });
};

const getURLImage = async (storageRef) => {
  return await getDownloadURL(storageRef)
    .then((url) => {
      return url;
    })
    .catch((error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case "storage/object-not-found":
          Toast.show({
            type: "error",
            text1: "File doesn't exist",
          });
          return false;
        case "storage/unauthorized":
          Toast.show({
            type: "error",
            text1: "User doesn't have permission to access the object",
          });
          return false;
        case "storage/canceled":
          Toast.show({
            type: "error",
            text1: "User canceled the upload",
          });
          return false;
        case "storage/unknown":
          Toast.show({
            type: "error",
            text1: "User canceled the upload",
          });
          return false;
      }
    });
};
