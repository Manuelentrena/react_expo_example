import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import Toast from "react-native-toast-message";

export default function useLogin() {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingLogout, setIsLoadingLogout] = useState(false);

  const auth = getAuth();

  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      user ? setIsLogin(true) : setIsLogin(false);
      setIsLoading(false);
    });
  }, []);

  const logout = async () => {
    setIsLoadingLogout(true);
    return signOut(auth)
      .then(() => {
        setIsLoadingLogout(false);
        return true;
      })
      .catch((error) => {
        setIsLoadingLogout(false);
        Toast.show({
          type: "error",
          text1: error.code,
        });
        return false;
      });
  };

  return {
    isLogin,
    isLoading,
    isLoadingLogout,
    auth,
    logout,
  };
}
