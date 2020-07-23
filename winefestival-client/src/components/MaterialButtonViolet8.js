import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonViolet8(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.sparkling}>Sparkling</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3F51B5",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  sparkling: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "merriweather-regular"
  }
});

export default MaterialButtonViolet8;
