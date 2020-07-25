import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "./AppBar.style";

function AppBar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.buttonWrapper1}>
        <MaterialCommunityIconsIcon
          name="account-circle"
          style={styles.icon1}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.profile2}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.activeButtonWrapper}>
        <MaterialCommunityIconsIcon
          name="glass-wine"
          style={styles.activeIcon}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.wines}>Wines</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonWrapper2}>
        <MaterialCommunityIconsIcon
          name="calendar"
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.events}>Events</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AppBar;
