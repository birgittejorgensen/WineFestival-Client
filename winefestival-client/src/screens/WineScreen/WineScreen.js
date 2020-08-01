import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialIconTextButtonsFooter1 from "../../components/Footer/MaterialIconTextButtonsFooter1";
import { styles } from "./WineScreen.style";
function WineScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect4Stack}>
        <View style={styles.rect4}>
          <View style={styles.image4Row}>
            <Image
              source={require("./../../assets/images/redwine.jpg")}
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
            source={require("./../../assets/images/redwine.jpg")}
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
            source={require("./../../assets/images/redwine.jpg")}
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
          source={require("./../../assets/images/GirlsWithGlasses1.jpg")}
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

export default WineScreen;
