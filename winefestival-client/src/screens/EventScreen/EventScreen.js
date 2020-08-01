import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import ButtonSecondary from "../../components/Buttons/ButtonSecondary/ButtonSecondary";
import MaterialIconTextButtonsFooter1 from "../../components/Footer/MaterialIconTextButtonsFooter1";
import { styles } from "./EventScreen.style";
function EventScreen(props) {
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
      <View style={styles.icon1Row}>
        <EntypoIcon name="location-pin" style={styles.icon1}></EntypoIcon>
        <Text style={styles.xxRoadXXxxxCity1}>
          Gadevej 15, 2300 København S
        </Text>
      </View>
      <View style={styles.icon2Row}>
        <FontAwesomeIcon name="calendar" style={styles.icon2}></FontAwesomeIcon>
        <Text style={styles.loremIpsum1}>22/07/20 at 14:30</Text>
      </View>
      <View style={styles.icon3Row}>
        <EntypoIcon name="calendar" style={styles.icon3}></EntypoIcon>
        <Text style={styles.text1}>Some Wine Event</Text>
      </View>
      <View style={styles.icon4Row}>
        <MaterialCommunityIconsIcon
          name="file-document-box-multiple-outline"
          style={styles.icon4}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.loremIpsum2}>
          Some Description about the event{"\n"}Lorem ipsum dolor sit
          consectetur {"\n"}adipiscing elit, sed do eiusmod...
        </Text>
      </View>
      <View style={styles.icon5Row}>
        <IoniconsIcon name="ios-pricetag" style={styles.icon5}></IoniconsIcon>
        <Text style={styles.loremIpsum3}>75 kr.</Text>
      </View>
      <View style={styles.icon6Row}>
        <MaterialCommunityIconsIcon
          name="glass-wine"
          style={styles.icon6}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.redWine}>Red wine</Text>
      </View>
      <View style={styles.icon7Row}>
        <MaterialCommunityIconsIcon
          name="cellphone-android"
          style={styles.icon7}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.loremIpsum4}>Mobile Pay to: 12345678</Text>
      </View>
      <ButtonSecondary style={styles.materialButtonViolet3}></ButtonSecondary>
      <MaterialIconTextButtonsFooter1
        style={styles.materialIconTextButtonsFooter1}
      ></MaterialIconTextButtonsFooter1>
    </View>
  );
}

export default EventScreen;
