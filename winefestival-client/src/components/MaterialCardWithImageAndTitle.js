import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function MaterialCardWithImageAndTitle(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.someWineEvent}>Some Wine Event</Text>
          <Text style={styles.statusSignedUp}>Status: Signed up</Text>
        </View>
        <Image
          source={require("../assets/images/cardImage1.png")}
          style={styles.cardItemImagePlace}
        ></Image>
      </View>
      <Text style={styles.loremIpsum}>When: 22/07/20 at 14:30</Text>
      <Text style={styles.loremIpsum2}>Location: xx road x, xxxx citu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden"
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    flex: 1
  },
  someWineEvent: {
    fontSize: 24,
    color: "#000",
    paddingBottom: 12
  },
  statusSignedUp: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    height: 80,
    width: 80,
    margin: 16
  },
  loremIpsum: {
    top: 97,
    left: 15,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  loremIpsum2: {
    top: 131,
    left: 16,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  }
});

export default MaterialCardWithImageAndTitle;
