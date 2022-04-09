import {
  StyleSheet,
  View,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import color from "../../styles/color";

export default function ModalCustom({ isOpenModal, setIsOpenModal, children }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isOpenModal}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setIsOpenModal(!isOpenModal);
      }}
    >
      <View style={styles.centeredView}>
        <TouchableWithoutFeedback onPress={() => setIsOpenModal(!isOpenModal)}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={styles.modalView}>{children}</View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "90%",
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.white,
  },
  modalOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: color.backgroundModal,
  },
});
