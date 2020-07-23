import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function FirstRunExperienceScreen(props) {
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
      <Text style={styles.loremIpsum1}>
        You are creating a new account!{"\n"}A notification have been sent{" "}
        {"\n"}for the admin of the app in order to{"\n"}authorize you.{"\n"}You
        will be notified once your login{"\n"}is ready, then you can start
        signing{"\n"}up for these awesome events!
      </Text>
      <View style={styles.iconRow}>
        <Icon name="heart" style={styles.icon}></Icon>
        <Text style={styles.welcome}>Welcome</Text>
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
    marginTop: 31
  },
  loremIpsum1: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    marginTop: 82,
    marginLeft: 69
  },
  icon: {
    color: "rgba(252,228,236,1)",
    fontSize: 40
  },
  welcome: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    fontSize: 25,
    marginLeft: 4,
    marginTop: 6
  },
  iconRow: {
    height: 44,
    flexDirection: "row",
    marginTop: -190,
    marginLeft: 80,
    marginRight: 138
  }
});

export default FirstRunExperienceScreen;
