import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import ButtonSecondary from "../../components/Buttons/ButtonSecondary/ButtonSecondary";

function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.poorWomen}>Poor Woman&#39;s Wine Festival</Text>
      </View>
      <Text style={styles.loremIpsum}>
        Welcome to the poor womans wine {"\n"}festival app. Here you can sign up
        for{"\n"}our awesome events, see previous {"\n"}events and wines.{"\n"}
        {"\n"}The concept started in Lorem ipsum {"\n"}dolor sit amet,
        consectetur adipiscing {"\n"}elit, sed do eiusmod tempor incididunt
        {"\n"} ut labore et dolore magna aliqua. Ut {"\n"}enim ad minim veniam,
        quis nostrud {"\n"}exercitation ullamco laboris nisi ut {"\n"}aliquip
        ex....
      </Text>
      <ButtonSecondary
        style={styles.materialButtonViolet5}
        state={{ text: "Start" }}
      />
      <Text style={styles.wineWineWine}>Wine wine wine</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rect: {
    width: 375,
    height: 87,
    backgroundColor: "rgba(252,228,236,0.69)",
    marginTop: 31,
    marginLeft: 1,
  },
  poorWomen: {
    fontFamily: "merriweather-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    marginTop: 31,
    marginLeft: 45,
  },
  loremIpsum: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    marginTop: 89,
    marginLeft: 69,
  },
  materialButtonViolet5: {
    height: 36,
    width: 100,
    backgroundColor: "rgba(173,87,116,1)",
    borderRadius: 8,
    marginTop: 25,
    marginLeft: 139,
  },
  wineWineWine: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    fontSize: 25,
    marginTop: -335,
    marginLeft: 92,
  },
});

export default WelcomeScreen;
