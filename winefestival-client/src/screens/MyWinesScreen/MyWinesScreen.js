import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIconTextButtonsFooter1 from "../components/MaterialIconTextButtonsFooter1";
import EntypoIcon from "react-native-vector-icons/Entypo";

function MyWinesScreen(props) {
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
      <View style={styles.icon2Row}>
        <MaterialCommunityIconsIcon
          name="glass-wine"
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.text}>My Wines</Text>
      </View>
      <MaterialIconTextButtonsFooter1
        style={styles.materialIconTextButtonsFooter1}
      ></MaterialIconTextButtonsFooter1>
      <View style={styles.rect2}>
        <View style={styles.image2Row}>
          <Image
            source={require("../assets/images/redwine.jpg")}
            resizeMode="stretch"
            style={styles.image2}
          ></Image>
          <View style={styles.icon3Column}>
            <MaterialCommunityIconsIcon
              name="bottle-wine"
              style={styles.icon3}
            ></MaterialCommunityIconsIcon>
            <MaterialCommunityIconsIcon
              name="glass-wine"
              style={styles.icon4}
            ></MaterialCommunityIconsIcon>
            <EntypoIcon
              name="awareness-ribbon"
              style={styles.icon5}
            ></EntypoIcon>
          </View>
          <View style={styles.ilRossoColumn}>
            <Text style={styles.ilRosso}>Il Rosso</Text>
            <Text style={styles.redWine}>Red wine</Text>
            <Text style={styles.loremIpsum}>7.6</Text>
          </View>
        </View>
      </View>
      <View style={styles.loremIpsum1StackStack}>
        <View style={styles.loremIpsum1Stack}>
          <Text style={styles.loremIpsum1}>7.6</Text>
          <View style={styles.rect3}></View>
        </View>
        <EntypoIcon name="awareness-ribbon" style={styles.icon6}></EntypoIcon>
        <MaterialCommunityIconsIcon
          name="glass-wine"
          style={styles.icon7}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.ilRosso1}>Il Rosso</Text>
        <Text style={styles.redWine1}>Red wine</Text>
        <MaterialCommunityIconsIcon
          name="bottle-wine"
          style={styles.icon8}
        ></MaterialCommunityIconsIcon>
        <Image
          source={require("../assets/images/redwine.jpg")}
          resizeMode="stretch"
          style={styles.image3}
        ></Image>
      </View>
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
  icon2: {
    color: "rgba(201,178,186,1)",
    fontSize: 45
  },
  text: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    fontSize: 25,
    width: 134,
    height: 43,
    marginLeft: 1,
    marginTop: 9
  },
  icon2Row: {
    height: 52,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 58,
    marginRight: 137
  },
  materialIconTextButtonsFooter1: {
    height: 60,
    width: 375,
    marginTop: 436
  },
  rect2: {
    width: 316,
    height: 155,
    backgroundColor: "rgba(230,230, 230,0)",
    borderWidth: 4,
    borderColor: "rgba(201,178,186,1)",
    borderRadius: 8,
    marginTop: -481,
    marginLeft: 29
  },
  image2: {
    width: 81,
    height: 100,
    borderWidth: 4,
    borderColor: "rgba(201,178,186,1)",
    borderRadius: 2
  },
  icon3: {
    color: "rgba(201,178,186,1)",
    fontSize: 25,
    height: 28,
    width: 25,
    marginLeft: 1
  },
  icon4: {
    color: "rgba(201,178,186,1)",
    fontSize: 25,
    height: 28,
    width: 25,
    marginTop: 11
  },
  icon5: {
    color: "rgba(201,178,186,1)",
    fontSize: 25,
    height: 27,
    width: 25,
    marginTop: 14
  },
  icon3Column: {
    width: 26,
    marginLeft: 17
  },
  ilRosso: {
    fontFamily: "merriweather-regular",
    color: "#121212"
  },
  redWine: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    marginTop: 16
  },
  loremIpsum: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    marginTop: 24
  },
  ilRossoColumn: {
    width: 63,
    marginLeft: 11,
    marginTop: 10,
    marginBottom: 4
  },
  image2Row: {
    height: 108,
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 19,
    marginRight: 99
  },
  loremIpsum1: {
    top: 110,
    left: 154,
    position: "absolute",
    fontFamily: "merriweather-regular",
    color: "#121212"
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
  loremIpsum1Stack: {
    top: 0,
    left: 0,
    width: 316,
    height: 155,
    position: "absolute"
  },
  icon6: {
    top: 105,
    left: 117,
    position: "absolute",
    color: "rgba(201,178,186,1)",
    fontSize: 25
  },
  icon7: {
    top: 63,
    left: 117,
    position: "absolute",
    color: "rgba(201,178,186,1)",
    fontSize: 25
  },
  ilRosso1: {
    top: 34,
    left: 154,
    position: "absolute",
    fontFamily: "merriweather-regular",
    color: "#121212"
  },
  redWine1: {
    top: 68,
    left: 154,
    position: "absolute",
    fontFamily: "merriweather-regular",
    color: "#121212"
  },
  icon8: {
    top: 24,
    left: 118,
    position: "absolute",
    color: "rgba(201,178,186,1)",
    fontSize: 25
  },
  image3: {
    top: 24,
    left: 19,
    width: 81,
    height: 100,
    position: "absolute",
    borderWidth: 4,
    borderColor: "rgba(201,178,186,1)",
    borderRadius: 2
  },
  loremIpsum1StackStack: {
    width: 316,
    height: 155,
    marginTop: 16,
    marginLeft: 29
  }
});

export default MyWinesScreen;
