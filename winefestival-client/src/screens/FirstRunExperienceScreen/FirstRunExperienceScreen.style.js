import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image1: {
    top: 0,
    width: 375,
    height: 196,
    position: "absolute",
    opacity: 0.53,
    backgroundColor: "rgba(15,15, 15,1)",
    left: 0,
  },
  rect1: {
    top: 73,
    left: 1,
    width: 375,
    height: 87,
    position: "absolute",
    backgroundColor: "rgba(252,228,236,0.69)",
  },
  poorWomen1: {
    fontFamily: "merriweather-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    marginTop: 31,
    marginLeft: 45,
  },
  image1Stack: {
    width: 376,
    height: 196,
    marginTop: 31,
  },
  loremIpsum1: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    marginTop: 82,
    marginLeft: 69,
  },
  icon: {
    color: "rgba(252,228,236,1)",
    fontSize: 40,
  },
  welcome: {
    fontFamily: "merriweather-regular",
    color: "#121212",
    fontSize: 25,
    marginLeft: 4,
    marginTop: 6,
  },
  iconRow: {
    height: 44,
    flexDirection: "row",
    marginTop: -190,
    marginLeft: 80,
    marginRight: 138,
  },
});
