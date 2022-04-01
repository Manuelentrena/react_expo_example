import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, Text, Image, ImageBackground } from "react-native";
import { styles } from "./DrawerCustomStyle";
import { FontAwesome5 } from "@expo/vector-icons";

export default function DrawerCustom(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.contentContainerStyle}
      >
        {/* HEADER MENU */}
        <ImageBackground
          source={require("../../assets/menu-bg.jpeg")}
          style={styles.ImageBackground}
        >
          {/* AVATAR */}
          <Image
            source={require("../../assets/user-profile.jpg")}
            style={styles.Image}
          />
          {/* NAME */}
          <Text style={styles.TextName}>Manuel Entrena</Text>
          {/* ICONS */}
          <View style={styles.ContainerIcons}>
            <Text style={styles.TextCoins}>280 Coins</Text>
            <FontAwesome5 name="coins" size={14} color="#fff" />
          </View>
        </ImageBackground>
        {/* LIST MENU */}
        <View style={styles.ContainerDrawerItemList}>
          <DrawerItemList {...props}></DrawerItemList>
        </View>
      </DrawerContentScrollView>
      {/* FOOTER  */}
      <View>
        <Text>Our Custom Text</Text>
      </View>
    </View>
  );
}
