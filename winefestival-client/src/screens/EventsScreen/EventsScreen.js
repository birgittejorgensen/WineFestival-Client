import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialIconTextButtonsFooter1 from "../../components/Footer/MaterialIconTextButtonsFooter1";
import { styles } from "./EventsScreen.style";

function EventsScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect3}>
        <View style={styles.icon2Row}>
          <MaterialCommunityIconsIcon
            name="glass-wine"
            style={styles.icon2}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.someWineEvent1}>Some Wine Event</Text>
        </View>
        <View style={styles.status1Row}>
          <Text style={styles.status1}>Status:</Text>
          <Text style={styles.past}>Past</Text>
        </View>
        <View style={styles.icon1Row}>
          <FontAwesomeIcon
            name="calendar"
            style={styles.icon1}
          ></FontAwesomeIcon>
          <Text style={styles.loremIpsum1}>22/07/2020 at 14:30</Text>
        </View>
        <View style={styles.icon5Row}>
          <EntypoIcon name="location" style={styles.icon5}></EntypoIcon>
          <Text style={styles.loremIpsum2}>Gadevej 15, 2300 København S</Text>
        </View>
      </View>
      <View style={styles.rect2}>
        <View style={styles.icon3Row}>
          <MaterialCommunityIconsIcon
            name="glass-wine"
            style={styles.icon3}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.someWineEvent2}>Some Wine Event</Text>
        </View>
        <View style={styles.status2Row}>
          <Text style={styles.status2}>Status:</Text>
          <Text style={styles.available}>Available</Text>
        </View>
        <View style={styles.icon4StackRow}>
          <View style={styles.icon4Stack}>
            <FontAwesomeIcon
              name="calendar"
              style={styles.icon4}
            ></FontAwesomeIcon>
            <EntypoIcon name="location" style={styles.icon6}></EntypoIcon>
            <EntypoIcon name="location" style={styles.icon7}></EntypoIcon>
            <EntypoIcon name="location" style={styles.icon8}></EntypoIcon>
          </View>
          <Text style={styles.loremIpsum4}>22/07/2020 at 14:30</Text>
        </View>
        <Text style={styles.loremIpsum3}>Gadevej 15, 2300 København S</Text>
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
      <View style={styles.icon9Row}>
        <MaterialCommunityIconsIcon
          name="calendar"
          style={styles.icon9}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.events}>Events</Text>
      </View>
    </View>
  );
}

export default EventsScreen;
