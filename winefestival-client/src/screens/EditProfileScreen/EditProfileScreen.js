import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ButtonSecondary from "../../components/Buttons/ButtonSecondary/ButtonSecondary";
import MaterialIconTextButtonsFooter1 from "../components/MaterialIconTextButtonsFooter1";

function EditProfileScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image1Stack}>
        <Image
          source={require("../assets/images/GirlsWithGlasses1.jpg")}
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
      <ButtonSecondary style={styles.materialButtonViolet4}></ButtonSecondary>
      <MaterialIconTextButtonsFooter1
        style={styles.materialIconTextButtonsFooter1}
      ></MaterialIconTextButtonsFooter1>
      <Image
        source={require("../assets/images/poorpinksparkle.jpg")}
        resizeMode="stretch"
        style={styles.image2}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image1: {
    top: 0,
    width: 375,
    height: 196,
    position: "absolute",
    opacity: 0.53,
    backgroundColor: "rgba(15,15, 15,1)",
    left: 0,
  },
  rect1: {
    top: 73,
    left: 2,
    width: 375,
    height: 87,
    position: "absolute",
    backgroundColor: "rgba(252,228,236,0.69)",
  },
  poorWomen1: {
    fontFamily: "merriweather-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    marginTop: 31,
    marginLeft: 44,
  },
  image1Stack: {
    width: 377,
    height: 196,
    marginTop: 31,
  },
  icon: {
    color: "rgba(201,178,186,1)",
    fontSize: 45,
    height: 43,
    width: 40,
  },
  text: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    fontSize: 25,
    marginLeft: 9,
    marginTop: 10,
  },
  iconRow: {
    height: 43,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 60,
    marginRight: 127,
  },
  materialButtonViolet4: {
    height: 43,
    width: 124,
    backgroundColor: "rgba(173,87,116,1)",
    borderRadius: 8,
    marginTop: 84,
    marginLeft: 126,
  },
  materialIconTextButtonsFooter1: {
    height: 60,
    width: 375,
    marginTop: 318,
  },
  image2: {
    width: 159,
    height: 191,
    backgroundColor: "#fff",
    borderWidth: 4,
    borderColor: "rgba(252,228,236,1)",
    borderRadius: 8,
    opacity: 0.75,
    marginTop: -307,
    marginLeft: 107,
  },
});

export default EditProfileScreen;
