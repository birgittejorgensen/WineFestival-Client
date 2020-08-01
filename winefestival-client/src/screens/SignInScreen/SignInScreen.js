import React, { Component } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./SignInScreen.style";

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

export default SignInScreen;
