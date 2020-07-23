import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialIconTextButtonsFooter1 from "../components/MaterialIconTextButtonsFooter1";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function EventsSignUpScreen(props) {
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
  loremIpsum: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    marginTop: 147,
    marginLeft: 96
  },
  icon2: {
    color: "rgba(173,87,116,1)",
    fontSize: 40
  },
  xxxxxxxx: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    marginLeft: 13,
    marginTop: 13
  },
  icon2Row: {
    height: 43,
    flexDirection: "row",
    marginTop: 39,
    marginLeft: 126,
    marginRight: 130
  },
  icon3: {
    color: "rgba(173,87,116,1)",
    fontSize: 40
  },
  loremIpsum1: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    marginLeft: 17,
    marginTop: 13
  },
  icon3Row: {
    height: 44,
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 130,
    marginRight: 157
  },
  materialIconTextButtonsFooter1: {
    height: 60,
    width: 375,
    marginTop: 172
  },
  icon4: {
    color: "rgba(65,117,5,1)",
    fontSize: 45,
    width: 37,
    height: 40
  },
  requestSent: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    fontSize: 25,
    marginLeft: 13,
    marginTop: 9
  },
  icon4Row: {
    height: 41,
    flexDirection: "row",
    marginTop: -548,
    marginLeft: 62,
    marginRight: 105
  },
  icon6: {
    color: "rgba(173,87,116,1)",
    fontSize: 40,
    marginTop: 36,
    marginLeft: 173
  }
});

export default EventsSignUpScreen;
