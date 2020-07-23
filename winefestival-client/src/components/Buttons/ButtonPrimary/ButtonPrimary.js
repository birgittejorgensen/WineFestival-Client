import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import styles from "./ButtonPrimary.style";

function ButtonPrimary(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.myWines}>{props.text}</Text>
    </TouchableOpacity>
  );
}

export default ButtonPrimary;
