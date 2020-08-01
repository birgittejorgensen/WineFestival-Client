import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { styles } from "./FirstRunExperienceScreen.style";
function FirstRunExperienceScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image1Stack}>
        <Image
          source={require("./../../assets/images/GirlsWithGlasses1.jpg")}
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

export default FirstRunExperienceScreen;
