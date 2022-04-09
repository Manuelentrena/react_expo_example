/* DEPENDENCIES */
import { Pressable, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
/* GLOBAL */
import color from "../../styles/color";

export default function IconPassword({ show, setShow }) {
  return (
    <Pressable
      onPressIn={() => setShow(true)}
      onPressOut={() => setShow(false)}
    >
      <Icon
        type="material-community"
        name={show ? "eye-outline" : "eye-off-outline"}
        iconStyle={styles.iconStyleInput}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconStyleInput: {
    color: color.gray,
  },
});
