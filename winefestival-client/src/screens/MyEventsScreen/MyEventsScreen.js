import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialIconTextButtonsFooter1 from "../../components/Footer/MaterialIconTextButtonsFooter1";
import { styles } from "./MyEventsScreen.style";
function MyEventsScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect4Stack}>
        <View style={styles.rect4}>
          <View style={styles.icon12Row}>
            <MaterialCommunityIconsIcon
              name="glass-wine"
              style={styles.icon12}
            ></MaterialCommunityIconsIcon>
            <Text style={styles.someWineEvent2}>Some Wine Event</Text>
          </View>
          <View style={styles.status2Row}>
            <Text style={styles.status2}>Status:</Text>
            <Text style={styles.attended1}>Attended</Text>
          </View>
          <View style={styles.icon11Row}>
            <FontAwesomeIcon
              name="calendar"
              style={styles.icon11}
            ></FontAwesomeIcon>
            <Text style={styles.loremIpsum5}>22/07/2020 at 14:30</Text>
          </View>
          <View style={styles.icon13Row}>
            <EntypoIcon name="location" style={styles.icon13}></EntypoIcon>
            <Text style={styles.loremIpsum6}>Gadevej 15, 2300 København S</Text>
          </View>
        </View>
        <MaterialIconTextButtonsFooter1
          style={styles.materialIconTextButtonsFooter1}
        ></MaterialIconTextButtonsFooter1>
      </View>
      <View style={styles.icon10Stack}>
        <EntypoIcon name="location" style={styles.icon10}></EntypoIcon>
        <View style={styles.rect3}>
          <View style={styles.icon5Row}>
            <MaterialCommunityIconsIcon
              name="glass-wine"
              style={styles.icon5}
            ></MaterialCommunityIconsIcon>
            <Text style={styles.someWineEvent1}>Some Wine Event</Text>
          </View>
          <View style={styles.status1Row}>
            <Text style={styles.status1}>Status:</Text>
            <Text style={styles.pending}>Pending</Text>
          </View>
          <View style={styles.icon6Row}>
            <FontAwesomeIcon
              name="calendar"
              style={styles.icon6}
            ></FontAwesomeIcon>
            <Text style={styles.loremIpsum4}>22/07/2020 at 14:30</Text>
          </View>
          <Text style={styles.loremIpsum3}>Gadevej 15, 2300 København S</Text>
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
      <View style={styles.rect2}>
        <View style={styles.icon4Row}>
          <MaterialCommunityIconsIcon
            name="glass-wine"
            style={styles.icon4}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.someWineEvent}>Some Wine Event</Text>
        </View>
        <View style={styles.statusRow}>
          <Text style={styles.status}>Status:</Text>
          <Text style={styles.signedUp}>Signed up</Text>
        </View>
        <View style={styles.icon2Row}>
          <FontAwesomeIcon
            name="calendar"
            style={styles.icon2}
          ></FontAwesomeIcon>
          <Text style={styles.loremIpsum}>22/07/2020 at 14:30</Text>
        </View>
        <View style={styles.icon14Row}>
          <EntypoIcon name="location" style={styles.icon14}></EntypoIcon>
          <Text style={styles.loremIpsum2}>Gadevej 15, 2300 København S</Text>
        </View>
      </View>
      <Text style={styles.myEvents}>My Events</Text>
    </View>
  );
}

export default MyEventsScreen;
