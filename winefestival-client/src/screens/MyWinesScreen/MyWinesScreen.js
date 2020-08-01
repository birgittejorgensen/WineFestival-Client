import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIconTextButtonsFooter1 from "../../components/Footer/MaterialIconTextButtonsFooter1";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { styles } from "./MyWinesScreen.style";

function MyWinesScreen(props) {
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
            source={require("./../../assets/images/redwine.jpg")}
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
          source={require("./../../assets/images/redwine.jpg")}
          resizeMode="stretch"
          style={styles.image3}
        ></Image>
      </View>
    </View>
  );
}

export default MyWinesScreen;
