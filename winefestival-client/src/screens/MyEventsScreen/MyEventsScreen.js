import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialIconTextButtonsFooter1 from "../components/MaterialIconTextButtonsFooter1";

function MyEventsScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect4Stack}>
        <View style={styles.rect4}>
          <View style={styles.icon12Row}>
            <MaterialCommunityIconsIcon
              name="glass-wine"
              style={styles.icon12}
            ></MaterialCommunityIconsIcon>
            <Text style={styles.someWineEvent2}>Some Wine Event</Text>
          </View>
          <View style={styles.status2Row}>
            <Text style={styles.status2}>Status:</Text>
            <Text style={styles.attended1}>Attended</Text>
          </View>
          <View style={styles.icon11Row}>
            <FontAwesomeIcon
              name="calendar"
              style={styles.icon11}
            ></FontAwesomeIcon>
            <Text style={styles.loremIpsum5}>22/07/2020 at 14:30</Text>
          </View>
          <View style={styles.icon13Row}>
            <EntypoIcon name="location" style={styles.icon13}></EntypoIcon>
            <Text style={styles.loremIpsum6}>Gadevej 15, 2300 København S</Text>
          </View>
        </View>
        <MaterialIconTextButtonsFooter1
          style={styles.materialIconTextButtonsFooter1}
        ></MaterialIconTextButtonsFooter1>
      </View>
      <View style={styles.icon10Stack}>
        <EntypoIcon name="location" style={styles.icon10}></EntypoIcon>
        <View style={styles.rect3}>
          <View style={styles.icon5Row}>
            <MaterialCommunityIconsIcon
              name="glass-wine"
              style={styles.icon5}
            ></MaterialCommunityIconsIcon>
            <Text style={styles.someWineEvent1}>Some Wine Event</Text>
          </View>
          <View style={styles.status1Row}>
            <Text style={styles.status1}>Status:</Text>
            <Text style={styles.pending}>Pending</Text>
          </View>
          <View style={styles.icon6Row}>
            <FontAwesomeIcon
              name="calendar"
              style={styles.icon6}
            ></FontAwesomeIcon>
            <Text style={styles.loremIpsum4}>22/07/2020 at 14:30</Text>
          </View>
          <Text style={styles.loremIpsum3}>Gadevej 15, 2300 København S</Text>
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
      <View style={styles.rect2}>
        <View style={styles.icon4Row}>
          <MaterialCommunityIconsIcon
            name="glass-wine"
            style={styles.icon4}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.someWineEvent}>Some Wine Event</Text>
        </View>
        <View style={styles.statusRow}>
          <Text style={styles.status}>Status:</Text>
          <Text style={styles.signedUp}>Signed up</Text>
        </View>
        <View style={styles.icon2Row}>
          <FontAwesomeIcon
            name="calendar"
            style={styles.icon2}
          ></FontAwesomeIcon>
          <Text style={styles.loremIpsum}>22/07/2020 at 14:30</Text>
        </View>
        <View style={styles.icon14Row}>
          <EntypoIcon name="location" style={styles.icon14}></EntypoIcon>
          <Text style={styles.loremIpsum2}>Gadevej 15, 2300 København S</Text>
        </View>
      </View>
      <Text style={styles.myEvents}>My Events</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect4: {
    top: 0,
    left: 29,
    width: 316,
    height: 155,
    position: "absolute",
    backgroundColor: "rgba(230,230, 230,0)",
    borderWidth: 4,
    borderColor: "rgba(201,178,186,1)",
    borderRadius: 8
  },
  icon12: {
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
  icon12Row: {
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
  attended1: {
    fontFamily: "merriweather-regular",
    color: "rgba(173,87,116,1)",
    marginLeft: 4
  },
  status2Row: {
    height: 18,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 184,
    marginRight: 17
  },
  icon11: {
    color: "rgba(201,178,186,1)",
    fontSize: 20,
    height: 20,
    width: 19
  },
  loremIpsum5: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    fontSize: 12,
    marginLeft: 13,
    marginTop: 5
  },
  icon11Row: {
    height: 20,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 17,
    marginRight: 149
  },
  icon13: {
    color: "rgba(201,178,186,1)",
    fontSize: 20,
    height: 23,
    width: 20
  },
  loremIpsum6: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    fontSize: 12,
    marginLeft: 12,
    marginTop: 1
  },
  icon13Row: {
    height: 23,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 17,
    marginRight: 89
  },
  materialIconTextButtonsFooter1: {
    height: 60,
    width: 375,
    position: "absolute",
    left: 0,
    top: 80
  },
  rect4Stack: {
    width: 375,
    height: 155,
    marginTop: 650
  },
  icon10: {
    left: 17,
    position: "absolute",
    color: "rgba(201,178,186,1)",
    fontSize: 20,
    top: 124
  },
  rect3: {
    top: 0,
    left: 0,
    width: 316,
    height: 155,
    position: "absolute",
    backgroundColor: "rgba(230,230, 230,0)",
    borderWidth: 4,
    borderColor: "rgba(201,178,186,1)",
    borderRadius: 8
  },
  icon5: {
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
  icon5Row: {
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
  pending: {
    fontFamily: "merriweather-regular",
    color: "rgba(224,118,54,1)",
    fontSize: 14,
    marginLeft: 5
  },
  status1Row: {
    height: 18,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 184,
    marginRight: 22
  },
  icon6: {
    color: "rgba(201,178,186,1)",
    fontSize: 20,
    height: 20,
    width: 19
  },
  loremIpsum4: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    fontSize: 12,
    marginLeft: 13,
    marginTop: 5
  },
  icon6Row: {
    height: 20,
    flexDirection: "row",
    marginTop: 12,
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
  icon10Stack: {
    width: 316,
    height: 155,
    marginTop: -325,
    marginLeft: 29
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
    left: 1,
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
    marginLeft: 45
  },
  image1Stack: {
    width: 376,
    height: 196,
    marginTop: -604
  },
  rect2: {
    width: 316,
    height: 155,
    backgroundColor: "rgba(230,230, 230,0)",
    borderWidth: 4,
    borderColor: "rgba(201,178,186,1)",
    borderRadius: 8,
    marginTop: 82,
    marginLeft: 29
  },
  icon4: {
    color: "rgba(201,178,186,1)",
    fontSize: 40,
    height: 43,
    width: 40
  },
  someWineEvent: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    fontSize: 20,
    marginLeft: 3,
    marginTop: 9
  },
  icon4Row: {
    height: 43,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 9,
    marginRight: 93
  },
  status: {
    fontFamily: "merriweather-regular",
    color: "rgba(201,178,186,1)"
  },
  signedUp: {
    fontFamily: "merriweather-regular",
    color: "rgba(65,117,5,1)",
    fontSize: 14,
    marginLeft: 5
  },
  statusRow: {
    height: 18,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 184,
    marginRight: 11
  },
  icon2: {
    color: "rgba(201,178,186,1)",
    fontSize: 20,
    height: 20,
    width: 19
  },
  loremIpsum: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    fontSize: 12,
    marginLeft: 13,
    marginTop: 5
  },
  icon2Row: {
    height: 20,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 17,
    marginRight: 149
  },
  icon14: {
    color: "rgba(201,178,186,1)",
    fontSize: 20,
    height: 23,
    width: 20
  },
  loremIpsum2: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    fontSize: 12,
    marginLeft: 13,
    marginTop: 5
  },
  icon14Row: {
    height: 23,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 16,
    marginRight: 89
  },
  myEvents: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    fontSize: 25,
    marginTop: -213,
    marginLeft: 121
  }
});

export default MyEventsScreen;
