import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import MaterialIconTextButtonsFooter1 from "../../components/MaterialIconTextButtonsFooter1";
import ButtonPrimary from "../../components/Buttons/ButtonPrimary/ButtonPrimary";
import SecondaryButton from "../components/SecondaryButton";
import SecondaryButton from "../../components/Buttons/ButtonSecondary/ButtonSecondary";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./HomeScreen.style";

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <MaterialIconTextButtonsFooter1
        style={styles.materialIconTextButtonsFooter1}
      ></MaterialIconTextButtonsFooter1>
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
      <ButtonPrimary
        style={styles.primaryButton}
        state={{ text: "My Events" }}
      />
      <ButtonPrimary
        style={styles.materialButtonPink1}
        state={{ text: "My Wines" }}
      />
      <View style={styles.group}>
        <ButtonPrimary
          style={styles.materialButtonPrimary}
          state={{ text: "Edit Profile" }}
        />
      </View>
      <SecondaryButton
        style={styles.secondaryButton}
        state={{ text: "Log out" }}
      />
      <View style={styles.iconRow}>
        <Icon name="account-circle" style={styles.icon}></Icon>
        <Text style={styles.profile}>Profile</Text>
      </View>
    </View>
  );
}

export default HomeScreen;
