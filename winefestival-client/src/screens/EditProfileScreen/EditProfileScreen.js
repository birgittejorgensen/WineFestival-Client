import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ButtonSecondary from "../../components/Buttons/ButtonSecondary/ButtonSecondary";
import MaterialIconTextButtonsFooter1 from "../../components/Footer/MaterialIconTextButtonsFooter1";
import { styles } from "./EditProfileScreen.style";
function EditProfileScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image1Stack}>
        <Image
          source={require("./../../assets/images/GirlsWithGlasses1.jpg")}
          resizeMode="stretch"
          style={styles.image1}
        ></Image>
        <View style={styles.rect1}>
          <Text style={styles.poorWomen1}>Poor Woman&#39;s Wine Festival</Text>
        </View>
      </View>
      <View style={styles.iconRow}>
        <Icon name="account-circle" style={styles.icon}></Icon>
        <Text style={styles.text}>Edit profile</Text>
      </View>
      <ButtonSecondary style={styles.deleteAccountButton}></ButtonSecondary>
      <MaterialIconTextButtonsFooter1
        style={styles.materialIconTextButtonsFooter1}
      ></MaterialIconTextButtonsFooter1>
      <Image
        source={require("./../../assets/images/poorpinksparkle.jpg")}
        resizeMode="stretch"
        style={styles.image2}
      ></Image>
    </View>
  );
}

export default EditProfileScreen;
