import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialUnderlineTextbox1 from "../../components/MaterialUnderlineTextbox1";
import ButtonPrimary from "../../components/Buttons/ButtonPrimary/ButtonPrimary";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import MaterialIconTextButtonsFooter1 from "../../components/MaterialIconTextButtonsFooter1";
import { styles } from "./WineEventApprovedScreen.style";

function WineEventApprovedScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect2}>
        <View style={styles.icon4Row}>
          <FontAwesomeIcon name="group" style={styles.icon4}></FontAwesomeIcon>
          <Text style={styles.team7}>Team 7</Text>
        </View>
        <View style={styles.icon6Row}>
          <MaterialCommunityIconsIcon
            name="human-female"
            style={styles.icon6}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.monika}>Monika</Text>
          <EntypoIcon name="plus" style={styles.icon10}></EntypoIcon>
          <MaterialCommunityIconsIcon
            name="human-female"
            style={styles.icon7}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.birgitte}>Birgitte</Text>
        </View>
        <View style={styles.icon9Row}>
          <MaterialCommunityIconsIcon
            name="glass-wine"
            style={styles.icon9}
          ></MaterialCommunityIconsIcon>
          <MaterialUnderlineTextbox1
            style={styles.materialUnderlineTextbox1}
          ></MaterialUnderlineTextbox1>
          <ButtonPrimary style={styles.editWineButton}></ButtonPrimary>
        </View>
      </View>
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
        <MaterialCommunityIconsIcon
          name="calendar"
          style={styles.icon}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.someWineEvent}>Some Wine Event</Text>
      </View>
      <View style={styles.icon2Row}>
        <FontAwesomeIcon name="calendar" style={styles.icon2}></FontAwesomeIcon>
        <Text style={styles.loremIpsum}>22/07/20 at 14:30</Text>
      </View>
      <View style={styles.icon3Row}>
        <EntypoIcon name="location-pin" style={styles.icon3}></EntypoIcon>
        <Text style={styles.xxRoadXXxxxCity}>xx road x, xxxx city</Text>
      </View>
      <View style={styles.icon5Row}>
        <MaterialIconsIcon
          name="question-answer"
          style={styles.icon5}
        ></MaterialIconsIcon>
        <Text style={styles.loremIpsum3}>
          Some description about the even from {"\n"}the organizers will go here
          so they can{"\n"}know more details....
        </Text>
      </View>
      <View style={styles.icon8Row}>
        <MaterialCommunityIconsIcon
          name="glass-wine"
          style={styles.icon8}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.redWine}>Red wine</Text>
      </View>
      <MaterialIconTextButtonsFooter1
        style={styles.materialIconTextButtonsFooter1}
      ></MaterialIconTextButtonsFooter1>
    </View>
  );
}

export default WineEventApprovedScreen;
