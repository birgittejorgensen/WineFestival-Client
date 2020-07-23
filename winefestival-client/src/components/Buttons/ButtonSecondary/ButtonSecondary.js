import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { styles } from "./ButtonSecondary.style";

function MaterialButtonViolet5(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.start}>{props.Text}</Text>
    </TouchableOpacity>
  );
}

export default MaterialButtonViolet5;
