import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./WinesMenuScreen.style";
import RedWineButton from "../../components/RedWineButton";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIconTextButtonsFooter1 from "../../components/Footer/MaterialIconTextButtonsFooter1";
import RoseButton from "../../components/RoseButton";
import SparklingButton from "../../components/SparklingButton";

function WinesMenuScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.materialButtonViolet6Stack}>
        <RedWineButton style={styles.materialButtonViolet6}></RedWineButton>
        <MaterialCommunityIconsIcon
          name="glass-wine"
          style={styles.icon}
        ></MaterialCommunityIconsIcon>
      </View>
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
      <MaterialIconTextButtonsFooter1
        style={styles.materialIconTextButtonsFooter1}
      ></MaterialIconTextButtonsFooter1>
      <View style={styles.materialButtonViolet7Stack}>
        <RoseButton style={styles.materialButtonViolet7}></RoseButton>
        <MaterialCommunityIconsIcon
          name="glass-wine"
          style={styles.icon3}
        ></MaterialCommunityIconsIcon>
      </View>
      <View style={styles.materialButtonViolet8Stack}>
        <SparklingButton style={styles.materialButtonViolet8}></SparklingButton>
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

export default WinesMenuScreen;
