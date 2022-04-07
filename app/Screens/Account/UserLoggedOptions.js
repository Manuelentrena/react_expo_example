import { useState } from "react";
/* DEPENDENCIES */
import { StyleSheet, Text, View } from "react-native";
import { ListItem, Icon } from "react-native-elements";
/* COMPONENTS */
import ModalCustom from "../../components/Modal/ModalCustom";
import ChangeEmailForm from "./UserLoggedOptionsForm/ChangeEmailForm";
import ChangeNameForm from "./UserLoggedOptionsForm/ChangeNameForm";
import ChangePassword from "./UserLoggedOptionsForm/ChangePassword";

export default function UserLoggedOptions({
  currentUser,
  getUser,
  updateName,
  changeEmail,
}) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [itemSelected, setItemSelected] = useState("");

  const { displayName, email } = currentUser;

  const handlePressItem = (key) => {
    switch (key) {
      case "name":
        setItemSelected(
          <ChangeNameForm
            name={displayName}
            setIsOpenModal={setIsOpenModal}
            getUser={getUser}
            updateName={updateName}
          />
        );
        break;
      case "email":
        setItemSelected(
          <ChangeEmailForm
            email={email}
            setIsOpenModal={setIsOpenModal}
            getUser={getUser}
            changeEmail={changeEmail}
          />
        );
        break;
      case "password":
        setItemSelected(<ChangePassword />);
        break;
      default:
        setItemSelected(null);
        break;
    }

    setIsOpenModal(true);
  };

  const OPTIONS = () => [
    {
      id: 0,
      title: "Cambiar Nombre y Apellidos",
      icon: "account-circle-outline",
      onPress: () => handlePressItem("name"),
    },
    {
      id: 1,
      title: "Cambiar Email",
      icon: "email-outline",
      onPress: () => handlePressItem("email"),
    },
    {
      id: 2,
      title: "Cambiar Contraseña",
      icon: "key",
      onPress: () => handlePressItem("password"),
    },
  ];

  return (
    <View>
      {OPTIONS().map(({ id, title, icon, onPress }, index) => (
        <ListItem key={index} bottomDivider onPress={onPress}>
          <Icon type="material-community" name={icon} />
          <ListItem.Content>
            <ListItem.Title>{title}</ListItem.Title>
            <ListItem.Subtitle>subtitulo</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron key={id} size={24} />
        </ListItem>
      ))}
      {/* MODAL */}
      <ModalCustom isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
        {itemSelected}
      </ModalCustom>
    </View>
  );
}

const styles = StyleSheet.create({});
