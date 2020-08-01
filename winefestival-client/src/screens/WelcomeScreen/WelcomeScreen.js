import React, { Component } from "react";
import { View, Text } from "react-native";
import ButtonSecondary from "../../components/Buttons/ButtonSecondary/ButtonSecondary";
import { styles } from "./WelcomeScreen.style";

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

export default WelcomeScreen;
