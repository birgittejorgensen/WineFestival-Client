import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialIconTextButtonsFooter1 from "../components/MaterialIconTextButtonsFooter1";

function EventsScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect3}>
        <View style={styles.icon2Row}>
          <MaterialCommunityIconsIcon
            name="glass-wine"
            style={styles.icon2}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.someWineEvent1}>Some Wine Event</Text>
        </View>
        <View style={styles.status1Row}>
          <Text style={styles.status1}>Status:</Text>
          <Text style={styles.past}>Past</Text>
        </View>
        <View style={styles.icon1Row}>
          <FontAwesomeIcon
            name="calendar"
            style={styles.icon1}
          ></FontAwesomeIcon>
          <Text style={styles.loremIpsum1}>22/07/2020 at 14:30</Text>
        </View>
        <View style={styles.icon5Row}>
          <EntypoIcon name="location" style={styles.icon5}></EntypoIcon>
          <Text style={styles.loremIpsum2}>Gadevej 15, 2300 København S</Text>
        </View>
      </View>
      <View style={styles.rect2}>
        <View style={styles.icon3Row}>
          <MaterialCommunityIconsIcon
            name="glass-wine"
            style={styles.icon3}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.someWineEvent2}>Some Wine Event</Text>
        </View>
        <View style={styles.status2Row}>
          <Text style={styles.status2}>Status:</Text>
          <Text style={styles.available}>Available</Text>
        </View>
        <View style={styles.icon4StackRow}>
          <View style={styles.icon4Stack}>
            <FontAwesomeIcon
              name="calendar"
              style={styles.icon4}
            ></FontAwesomeIcon>
            <EntypoIcon name="location" style={styles.icon6}></EntypoIcon>
            <EntypoIcon name="location" style={styles.icon7}></EntypoIcon>
            <EntypoIcon name="location" style={styles.icon8}></EntypoIcon>
          </View>
          <Text style={styles.loremIpsum4}>22/07/2020 at 14:30</Text>
        </View>
        <Text style={styles.loremIpsum3}>Gadevej 15, 2300 København S</Text>
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
      <MaterialIconTextButtonsFooter1
        style={styles.materialIconTextButtonsFooter1}
      ></MaterialIconTextButtonsFooter1>
      <View style={styles.icon9Row}>
        <MaterialCommunityIconsIcon
          name="calendar"
          style={styles.icon9}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.events}>Events</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect3: {
    width: 316,
    height: 155,
    backgroundColor: "rgba(230,230, 230,0)",
    borderWidth: 4,
    borderColor: "rgba(201,178,186,1)",
    borderRadius: 8,
    marginTop: 480,
    marginLeft: 29
  },
  icon2: {
    color: "rgba(201,178,186,1)",
    fontSize: 40,
    height: 43,
    width: 40
  },
  someWineEvent1: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    fontSize: 20,
    marginLeft: 3,
    marginTop: 9
  },
  icon2Row: {
    height: 43,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 9,
    marginRight: 93
  },
  status1: {
    fontFamily: "merriweather-regular",
    color: "rgba(201,178,186,1)"
  },
  past: {
    fontFamily: "merriweather-regular",
    color: "rgba(74,74,74,1)",
    marginLeft: 7
  },
  status1Row: {
    height: 18,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 184,
    marginRight: 48
  },
  icon1: {
    color: "rgba(201,178,186,1)",
    fontSize: 20,
    height: 20,
    width: 19
  },
  loremIpsum1: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    fontSize: 12,
    marginLeft: 13,
    marginTop: 5
  },
  icon1Row: {
    height: 20,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 17,
    marginRight: 149
  },
  icon5: {
    color: "rgba(201,178,186,1)",
    fontSize: 20,
    height: 23,
    width: 20
  },
  loremIpsum2: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    fontSize: 12,
    marginLeft: 12,
    marginTop: 1
  },
  icon5Row: {
    height: 23,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 17,
    marginRight: 89
  },
  rect2: {
    width: 316,
    height: 155,
    backgroundColor: "rgba(230,230, 230,0)",
    borderWidth: 4,
    borderColor: "rgba(201,178,186,1)",
    borderRadius: 8,
    marginTop: -326,
    marginLeft: 29
  },
  icon3: {
    color: "rgba(201,178,186,1)",
    fontSize: 40,
    height: 43,
    width: 40
  },
  someWineEvent2: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    fontSize: 20,
    marginLeft: 3,
    marginTop: 9
  },
  icon3Row: {
    height: 43,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 9,
    marginRight: 93
  },
  status2: {
    fontFamily: "merriweather-regular",
    color: "rgba(201,178,186,1)"
  },
  available: {
    fontFamily: "merriweather-regular",
    color: "rgba(80,227,194,1)",
    marginLeft: 5
  },
  status2Row: {
    height: 18,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 184,
    marginRight: 16
  },
  icon4: {
    top: 4,
    left: 0,
    position: "absolute",
    color: "rgba(201,178,186,1)",
    fontSize: 20,
    height: 20,
    width: 19
  },
  icon6: {
    left: 0,
    position: "absolute",
    color: "rgba(201,178,186,1)",
    fontSize: 20,
    height: 23,
    width: 20,
    top: 0
  },
  icon7: {
    left: 0,
    position: "absolute",
    color: "rgba(201,178,186,1)",
    fontSize: 20,
    height: 23,
    width: 20,
    top: 0
  },
  icon8: {
    left: 0,
    position: "absolute",
    color: "rgba(201,178,186,1)",
    fontSize: 20,
    height: 23,
    width: 20,
    top: 0
  },
  icon4Stack: {
    width: 20,
    height: 24
  },
  loremIpsum4: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    fontSize: 12,
    marginLeft: 12,
    marginTop: 9
  },
  icon4StackRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 17,
    marginRight: 149
  },
  loremIpsum3: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    fontSize: 12,
    marginTop: 15,
    marginLeft: 49
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
    marginTop: -433
  },
  materialIconTextButtonsFooter1: {
    height: 60,
    width: 375,
    marginTop: 503
  },
  icon9: {
    color: "rgba(201,178,186,1)",
    fontSize: 40
  },
  events: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    fontSize: 25,
    marginLeft: 6,
    marginTop: 9
  },
  icon9Row: {
    height: 43,
    flexDirection: "row",
    marginTop: -548,
    marginLeft: 88,
    marginRight: 158
  }
});

export default EventsScreen;
