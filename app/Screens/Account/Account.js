/* SCREENS */
import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";
/* COMPONENTS */
import Loader from "../../components/Loader/Loader";
/* HOOK */
import useLogin from "../../Hooks/useLogin";

export default function Account() {
  const { isLoading, isLogin, logout, isLoadingLogout } = useLogin();

  if (isLoading) return <Loader text="CARGANDO..." />;

  return isLogin ? (
    <UserLogged logout={logout} isLoadingLogout={isLoadingLogout} />
  ) : (
    <UserGuest />
  );
}
