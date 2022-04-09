import { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import Toast from "react-native-toast-message";

export default function useMediaLibrary() {
  const [typePermission, setTypePermission] = useState(
    ImagePicker.PermissionStatus.UNDETERMINED
  );
  const [uri, setUri] = useState(null);

  useEffect(() => {
    getPermissionsMediaLibrary();
  }, []);

  const getPermissionsMediaLibrary = async () => {
    const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
    setTypePermission(status);
  };

  const handleImage = async () => {
    if (typePermission === ImagePicker.PermissionStatus.GRANTED) {
      openGalery();
    } else {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setTypePermission(status);
      if (status === ImagePicker.PermissionStatus.DENIED) {
        Toast.show({
          type: "error",
          text1: "Se necesitan permisos",
        });
      }
      if (status === ImagePicker.PermissionStatus.GRANTED) {
        openGalery();
      }
    }
  };

  const openGalery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    !result.cancelled ? setUri(result.uri) : setUri(null);
  };

  return {
    handleImage,
    uri,
  };
}
