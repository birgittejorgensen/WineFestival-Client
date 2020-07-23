import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialIconTextButtonsFooter1 from "../components/MaterialIconTextButtonsFooter1";

function WineScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect4Stack}>
        <View style={styles.rect4}>
          <View style={styles.image4Row}>
            <Image
              source={require("../assets/images/redwine.jpg")}
              resizeMode="stretch"
              style={styles.image4}
            ></Image>
            <View style={styles.icon13Column}>
              <MaterialCommunityIconsIcon
                name="bottle-wine"
                style={styles.icon13}
              ></MaterialCommunityIconsIcon>
              <MaterialCommunityIconsIcon
                name="glass-wine"
                style={styles.icon12}
              ></MaterialCommunityIconsIcon>
              <EntypoIcon
                name="awareness-ribbon"
                style={styles.icon11}
              ></EntypoIcon>
            </View>
            <View style={styles.ilRosso3Column}>
              <Text style={styles.ilRosso3}>Il Rosso</Text>
              <Text style={styles.redWine4}>Red wine</Text>
              <Text style={styles.loremIpsum3}>7.6</Text>
            </View>
          </View>
        </View>
        <MaterialIconTextButtonsFooter1
          style={styles.materialIconTextButtonsFooter1}
        ></MaterialIconTextButtonsFooter1>
      </View>
      <View style={styles.rect3}>
        <View style={styles.image3Row}>
          <Image
            source={require("../assets/images/redwine.jpg")}
            resizeMode="stretch"
            style={styles.image3}
          ></Image>
          <View style={styles.icon10Column}>
            <MaterialCommunityIconsIcon
              name="bottle-wine"
              style={styles.icon10}
            ></MaterialCommunityIconsIcon>
            <MaterialCommunityIconsIcon
              name="glass-wine"
              style={styles.icon9}
            ></MaterialCommunityIconsIcon>
            <EntypoIcon
              name="awareness-ribbon"
              style={styles.icon8}
            ></EntypoIcon>
          </View>
          <View style={styles.ilRosso2Column}>
            <Text style={styles.ilRosso2}>Il Rosso</Text>
            <Text style={styles.redWine3}>Red wine</Text>
            <Text style={styles.loremIpsum2}>7.6</Text>
          </View>
        </View>
      </View>
      <View style={styles.rect2}>
        <View style={styles.image2Row}>
          <Image
            source={require("../assets/images/redwine.jpg")}
            resizeMode="stretch"
            style={styles.image2}
          ></Image>
          <View style={styles.icon7Column}>
            <MaterialCommunityIconsIcon
              name="bottle-wine"
              style={styles.icon7}
            ></MaterialCommunityIconsIcon>
            <MaterialCommunityIconsIcon
              name="glass-wine"
              style={styles.icon6}
            ></MaterialCommunityIconsIcon>
            <EntypoIcon
              name="awareness-ribbon"
              style={styles.icon5}
            ></EntypoIcon>
          </View>
          <View style={styles.ilRosso1Column}>
            <Text style={styles.ilRosso1}>Il Rosso</Text>
            <Text style={styles.redWine2}>Red wine</Text>
            <Text style={styles.loremIpsum1}>7.6</Text>
          </View>
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
      <View style={styles.icon4Row}>
        <MaterialCommunityIconsIcon
          name="bottle-wine"
          style={styles.icon4}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.redWines1}>Red wines</Text>
      </View>
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
    borderColor: "rgba(153,45,28,1)",
    borderRadius: 8
  },
  image4: {
    width: 81,
    height: 100,
    borderWidth: 4,
    borderColor: "rgba(153,45,28,1)",
    borderRadius: 8
  },
  icon13: {
    color: "rgba(153,45,28,1)",
    fontSize: 25,
    height: 28,
    width: 25,
    marginLeft: 1
  },
  icon12: {
    color: "rgba(153,45,28,1)",
    fontSize: 25,
    height: 28,
    width: 25,
    marginTop: 11
  },
  icon11: {
    color: "rgba(201,178,186,1)",
    fontSize: 25,
    height: 27,
    width: 25,
    marginTop: 14
  },
  icon13Column: {
    width: 26,
    marginLeft: 17
  },
  ilRosso3: {
    fontFamily: "merriweather-regular",
    color: "#121212"
  },
  redWine4: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    marginTop: 16
  },
  loremIpsum3: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    marginTop: 24
  },
  ilRosso3Column: {
    width: 63,
    marginLeft: 11,
    marginTop: 10,
    marginBottom: 4
  },
  image4Row: {
    height: 108,
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 19,
    marginRight: 99
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
  rect3: {
    width: 316,
    height: 155,
    backgroundColor: "rgba(230,230, 230,0)",
    borderWidth: 4,
    borderColor: "rgba(153,45,28,1)",
    borderRadius: 8,
    marginTop: -325,
    marginLeft: 29
  },
  image3: {
    width: 81,
    height: 100,
    borderWidth: 4,
    borderColor: "rgba(153,45,28,1)",
    borderRadius: 8
  },
  icon10: {
    color: "rgba(153,45,28,1)",
    fontSize: 25,
    height: 28,
    width: 25,
    marginLeft: 1
  },
  icon9: {
    color: "rgba(153,45,28,1)",
    fontSize: 25,
    height: 28,
    width: 25,
    marginTop: 11
  },
  icon8: {
    color: "rgba(153,45,28,1)",
    fontSize: 25,
    height: 27,
    width: 25,
    marginTop: 14
  },
  icon10Column: {
    width: 26,
    marginLeft: 17
  },
  ilRosso2: {
    fontFamily: "merriweather-regular",
    color: "#121212"
  },
  redWine3: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    marginTop: 16
  },
  loremIpsum2: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    marginTop: 24
  },
  ilRosso2Column: {
    width: 63,
    marginLeft: 11,
    marginTop: 10,
    marginBottom: 4
  },
  image3Row: {
    height: 108,
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 19,
    marginRight: 99
  },
  rect2: {
    width: 316,
    height: 155,
    backgroundColor: "rgba(230,230, 230,0)",
    borderWidth: 4,
    borderColor: "rgba(153,45,28,1)",
    borderRadius: 8,
    marginTop: -326,
    marginLeft: 29
  },
  image2: {
    width: 81,
    height: 100,
    borderWidth: 4,
    borderColor: "rgba(153,45,28,1)",
    borderRadius: 8
  },
  icon7: {
    color: "rgba(153,45,28,1)",
    fontSize: 25,
    height: 28,
    width: 25,
    marginLeft: 1
  },
  icon6: {
    color: "rgba(153,45,28,1)",
    fontSize: 25,
    height: 28,
    width: 25,
    marginTop: 11
  },
  icon5: {
    color: "rgba(153,45,28,1)",
    fontSize: 25,
    height: 27,
    width: 25,
    marginTop: 14
  },
  icon7Column: {
    width: 26,
    marginLeft: 17
  },
  ilRosso1: {
    fontFamily: "merriweather-regular",
    color: "#121212"
  },
  redWine2: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    marginTop: 16
  },
  loremIpsum1: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    marginTop: 24
  },
  ilRosso1Column: {
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
  icon4: {
    color: "rgba(153,45,28,1)",
    fontSize: 45
  },
  redWines1: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    fontSize: 25,
    marginLeft: 4,
    marginTop: 9
  },
  icon4Row: {
    height: 50,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 76,
    marginRight: 126
  }
});

export default WineScreen;
