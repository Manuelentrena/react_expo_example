/* SCREENS */
import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";
/* COMPONENTS */
import Loader from "../../components/Loader/Loader";
/* HOOK */
import useLogin from "../../Hooks/useLogin";

export default function Account() {
  const { isLoading, isLogin } = useLogin();

  if (isLoading) return <Loader text="CARGANDO..." />;

  return isLogin ? <UserLogged /> : <UserGuest />;
}
