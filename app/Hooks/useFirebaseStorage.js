import { useState, useEffect } from "react";
/* SERVICES */
import { ImageStorage } from "../services/ImageStorage";

export default function useFirebaseStorage() {
  const [isLoadAvatar, setIsLoadAvatar] = useState(false);

  const uploadImage = async ({ uri, uid, folder }) => {
    setIsLoadAvatar(true);
    const res = await fetch(uri);
    const blob = await res.blob();

    ImageStorage({ uid, file: blob, folder })
      .then((response) => {
        setIsLoadAvatar(false);
        return response;
      })
      .catch(() => {
        return false;
      });

    return response;
  };

  return {
    uploadImage,
    isLoadAvatar,
  };
}
