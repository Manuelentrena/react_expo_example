import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

export default function useLogin() {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const auth = getAuth();

  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      user ? setIsLogin(true) : setIsLogin(false);
      setIsLoading(false);
    });
  }, []);

  return {
    isLogin,
    isLoading,
  };
}
