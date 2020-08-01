import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialIconTextButtonsFooter1 from "../../components/Footer/MaterialIconTextButtonsFooter1";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { styles } from "./EventsSignUpScreen.style";

function EventsSignUpScreen(props) {
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
      <Text style={styles.loremIpsum}>
        Your sign up will be confirmed{"\n"}once you have Mobile paid.
      </Text>
      <View style={styles.icon2Row}>
        <MaterialCommunityIconsIcon
          name="cellphone-android"
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.xxxxxxxx}>12345678</Text>
      </View>
      <View style={styles.icon3Row}>
        <IoniconsIcon name="ios-pricetag" style={styles.icon3}></IoniconsIcon>
        <Text style={styles.loremIpsum1}>75 kr.</Text>
      </View>
      <MaterialIconTextButtonsFooter1
        style={styles.materialIconTextButtonsFooter1}
      ></MaterialIconTextButtonsFooter1>
      <View style={styles.icon4Row}>
        <FontAwesomeIcon
          name="check-square-o"
          style={styles.icon4}
        ></FontAwesomeIcon>
        <Text style={styles.requestSent}>Request sent</Text>
      </View>
      <FontAwesomeIcon
        name="exclamation-circle"
        style={styles.icon6}
      ></FontAwesomeIcon>
    </View>
  );
}

export default EventsSignUpScreen;
