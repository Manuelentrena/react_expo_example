import { useRef, useEffect } from "react";
/* ELEMENTS */
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
/* GLOBAL */
import { iconType, iconColor, iconName } from "../common/global";
/* STYLES */
import { styles } from "./NavigationStyles";

export default function TabButton(props) {
  const { title, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({
        0: { scale: 0.5, rotate: "0deg" },
        1: { scale: 1.3, rotate: "360deg" },
      });
    } else {
      viewRef.current.animate({
        0: { scale: 1.3 },
        1: { scale: 1 },
      });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={1}
    >
      <Animatable.View ref={viewRef} duration={750} style={styles.container}>
        <Icon
          name={iconName[title]}
          type={iconType}
          color={focused ? iconColor["ON"] : iconColor["OFF"]}
        />
      </Animatable.View>
    </TouchableOpacity>
  );
}
