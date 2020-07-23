import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialButtonViolet3 from "../components/MaterialButtonViolet3";
import MaterialIconTextButtonsFooter1 from "../components/MaterialIconTextButtonsFooter1";

function EventScreen(props) {
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
      <MaterialButtonViolet3
        style={styles.materialButtonViolet3}
      ></MaterialButtonViolet3>
      <MaterialIconTextButtonsFooter1
        style={styles.materialIconTextButtonsFooter1}
      ></MaterialIconTextButtonsFooter1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image1: {
    top: 0,
    width: 375,
    height: 196,
    position: "absolute",
    opacity: 0.53,
    backgroundColor: "rgba(15,15, 15,1)",
    left: 0
  },
  rect1: {
    top: 73,
    left: 2,
    width: 375,
    height: 87,
    position: "absolute",
    backgroundColor: "rgba(252,228,236,0.69)"
  },
  poorWomen1: {
    fontFamily: "merriweather-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    marginTop: 31,
    marginLeft: 44
  },
  image1Stack: {
    width: 377,
    height: 196,
    marginTop: 31
  },
  icon1: {
    color: "rgba(201,178,186,1)",
    fontSize: 35,
    height: 38,
    width: 35
  },
  xxRoadXXxxxCity1: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    marginLeft: 19,
    marginTop: 11
  },
  icon1Row: {
    height: 38,
    flexDirection: "row",
    marginTop: 132,
    marginLeft: 40,
    marginRight: 73
  },
  icon2: {
    color: "rgba(201,178,186,1)",
    fontSize: 30
  },
  loremIpsum1: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    marginLeft: 24,
    marginTop: 6
  },
  icon2Row: {
    height: 30,
    flexDirection: "row",
    marginTop: -88,
    marginLeft: 42,
    marginRight: 161
  },
  icon3: {
    color: "rgba(201,178,186,1)",
    fontSize: 40
  },
  text1: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    fontSize: 25,
    marginLeft: 18,
    marginTop: 9
  },
  icon3Row: {
    height: 44,
    flexDirection: "row",
    marginTop: -97,
    marginLeft: 36,
    marginRight: 66
  },
  icon4: {
    color: "rgba(201,178,186,1)",
    fontSize: 35,
    height: 38,
    width: 35
  },
  loremIpsum2: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    marginLeft: 17
  },
  icon4Row: {
    height: 54,
    flexDirection: "row",
    marginTop: 223,
    marginLeft: 42,
    marginRight: 40
  },
  icon5: {
    color: "rgba(201,178,186,1)",
    fontSize: 35,
    width: 28,
    height: 38
  },
  loremIpsum3: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    marginLeft: 25,
    marginTop: 8
  },
  icon5Row: {
    height: 38,
    flexDirection: "row",
    marginTop: -104,
    marginLeft: 42,
    marginRight: 242
  },
  icon6: {
    color: "rgba(201,178,186,1)",
    fontSize: 35,
    width: 35,
    height: 38
  },
  redWine: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    marginLeft: 18,
    marginTop: 10
  },
  icon6Row: {
    height: 38,
    flexDirection: "row",
    marginTop: -88,
    marginLeft: 42,
    marginRight: 198
  },
  icon7: {
    color: "rgba(201,178,186,1)",
    fontSize: 35,
    width: 40,
    height: 43
  },
  loremIpsum4: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    marginLeft: 13,
    marginTop: 13
  },
  icon7Row: {
    height: 43,
    flexDirection: "row",
    marginTop: 134,
    marginLeft: 42,
    marginRight: 113
  },
  materialButtonViolet3: {
    height: 36,
    width: 100,
    backgroundColor: "rgba(173,87,116,1)",
    borderRadius: 8,
    marginTop: 28,
    marginLeft: 127
  },
  materialIconTextButtonsFooter1: {
    height: 60,
    width: 375,
    marginTop: 42
  }
});

export default EventScreen;
