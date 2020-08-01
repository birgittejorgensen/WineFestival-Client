import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import EditProfileScreen from "./src/screens/EditProfileScreen/EditProfileScreen";
import EventScreen from "./src/screens/EventScreen/EventScreen";
import EventsScreen from "./src/screens/EventsScreen/EventsScreen";
import EventsSignUpScreen from "./src/screens/EventsSignUpScreen/EventsSignUpScreen";
import FirstRunExperienceScreen from "./src/screens/FirstRunExperienceScreen/FirstRunExperienceScreen";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import MyEventsScreen from "./src/screens/MyEventsScreen/MyEventsScreen";
import MyWinesScreen from "./src/screens/MyWinesScreen/MyWinesScreen";
import SignInScreen from "./src/screens/SignInScreen/SignInScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen/WelcomeScreen";
import WineEventApprovedScreen from "./src/screens/WineEventApprovedScreen/WineEventApprovedScreen";
import WineScreen from "./src/screens/WineScreen/WineScreen";
import WinesMenuScreen from "./src/screens/WinesMenuScreen/WinesMenuScreen";

const DrawerNavigation = createDrawerNavigator({
  EditProfileScreen: EditProfileScreen,
  EventScreen: EventScreen,
  EventsScreen: EventsScreen,
  EventsSignUpScreen: EventsSignUpScreen,
  FirstRunExperienceScreen: FirstRunExperienceScreen,
  HomeScreen: HomeScreen,
  MyEventsScreen: MyEventsScreen,
  MyWinesScreen: MyWinesScreen,
  SignInScreen: SignInScreen,
  WelcomeScreen: WelcomeScreen,
  WineEventApprovedScreen: WineEventApprovedScreen,
  WineScreen: WineScreen,
  WinesMenuScreen: WinesMenuScreen,
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation,
    },
    EditProfileScreen: EditProfileScreen,
    EventScreen: EventScreen,
    EventsScreen: EventsScreen,
    EventsSignUpScreen: EventsSignUpScreen,
    FirstRunExperienceScreen: FirstRunExperienceScreen,
    HomeScreen: HomeScreen,
    MyEventsScreen: MyEventsScreen,
    MyWinesScreen: MyWinesScreen,
    SignInScreen: SignInScreen,
    WelcomeScreen: WelcomeScreen,
    WineEventApprovedScreen: WineEventApprovedScreen,
    WineScreen: WineScreen,
    WinesMenuScreen: WinesMenuScreen,
  },
  {
    headerMode: "none",
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "merriweather-regular": require("./src/assets/fonts/merriweather-regular.ttf"),
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
    }),
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
