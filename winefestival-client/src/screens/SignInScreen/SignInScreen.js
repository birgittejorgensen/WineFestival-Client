import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function SignInScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.signIn}>Sign in</Text>
      <View style={styles.rect}>
        <View style={styles.iconRow}>
          <Icon name="logo-facebook" style={styles.icon}></Icon>
          <Text style={styles.facebook}>Facebook</Text>
        </View>
      </View>
      <Text style={styles.loremIpsum}>
        Don&#39;t have an account yet?{"\n"}Simply sign up by pressing {"\n"}the
        button above
      </Text>
      <View style={styles.rect1}>
        <Text style={styles.poorWomen1}>Poor Woman&#39;s Wine Festival</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  signIn: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    fontSize: 25,
    marginTop: 251,
    marginLeft: 140
  },
  rect: {
    width: 196,
    height: 38,
    backgroundColor: "rgba(74,144,226,1)",
    borderRadius: 8,
    flexDirection: "row",
    marginTop: 36,
    marginLeft: 85
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    height: 33,
    width: 23
  },
  facebook: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginLeft: 24,
    marginTop: 8
  },
  iconRow: {
    height: 33,
    flexDirection: "row",
    flex: 1,
    marginRight: 63,
    marginLeft: 25,
    marginTop: 3
  },
  loremIpsum: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    fontSize: 12,
    marginTop: 10,
    marginLeft: 103
  },
  rect1: {
    width: 375,
    height: 87,
    backgroundColor: "rgba(252,228,236,0.69)",
    marginTop: -383
  },
  poorWomen1: {
    fontFamily: "merriweather-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    marginTop: 32,
    marginLeft: 46
  }
});

export default SignInScreen;
