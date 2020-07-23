import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import MaterialButtonViolet6 from "../components/MaterialButtonViolet6";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIconTextButtonsFooter1 from "../components/MaterialIconTextButtonsFooter1";
import MaterialButtonViolet7 from "../components/MaterialButtonViolet7";
import MaterialButtonViolet8 from "../components/MaterialButtonViolet8";

function WinesMenuScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.materialButtonViolet6Stack}>
        <MaterialButtonViolet6
          style={styles.materialButtonViolet6}
        ></MaterialButtonViolet6>
        <MaterialCommunityIconsIcon
          name="glass-wine"
          style={styles.icon}
        ></MaterialCommunityIconsIcon>
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
      <View style={styles.materialButtonViolet7Stack}>
        <MaterialButtonViolet7
          style={styles.materialButtonViolet7}
        ></MaterialButtonViolet7>
        <MaterialCommunityIconsIcon
          name="glass-wine"
          style={styles.icon3}
        ></MaterialCommunityIconsIcon>
      </View>
      <View style={styles.materialButtonViolet8Stack}>
        <MaterialButtonViolet8
          style={styles.materialButtonViolet8}
        ></MaterialButtonViolet8>
        <MaterialCommunityIconsIcon
          name="glass-wine"
          style={styles.icon4}
        ></MaterialCommunityIconsIcon>
      </View>
      <View style={styles.icon5Row}>
        <MaterialCommunityIconsIcon
          name="bottle-wine"
          style={styles.icon5}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.wines}>Wines</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialButtonViolet6: {
    height: 36,
    width: 115,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(153,45,28,1)",
    borderRadius: 8
  },
  icon: {
    top: 10,
    left: 8,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 15
  },
  materialButtonViolet6Stack: {
    width: 115,
    height: 36,
    marginTop: 339,
    marginLeft: 133
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
    marginTop: -344
  },
  materialIconTextButtonsFooter1: {
    height: 60,
    width: 375,
    marginTop: 503
  },
  materialButtonViolet7: {
    height: 36,
    width: 115,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(252,228,236,1)",
    borderRadius: 8
  },
  icon3: {
    top: 10,
    left: 8,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 15
  },
  materialButtonViolet7Stack: {
    width: 115,
    height: 36,
    marginTop: -396,
    marginLeft: 133
  },
  materialButtonViolet8: {
    height: 36,
    width: 115,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(5,111,117,1)",
    borderRadius: 8
  },
  icon4: {
    top: 10,
    left: 8,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 15
  },
  materialButtonViolet8Stack: {
    width: 115,
    height: 36,
    marginTop: 19,
    marginLeft: 133
  },
  icon5: {
    color: "rgba(252,228,236,1)",
    fontSize: 45
  },
  wines: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    fontSize: 25,
    marginLeft: 2,
    marginTop: 9
  },
  icon5Row: {
    height: 50,
    flexDirection: "row",
    marginTop: -243,
    marginLeft: 105,
    marginRight: 147
  }
});

export default WinesMenuScreen;
