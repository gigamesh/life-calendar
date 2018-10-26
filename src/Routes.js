import React from "react";
import { View } from "react-native";

import {
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";
import TitleAnim from "./components/TitleAnim";
import Home from "./components/Home";

export const StackNav = createBottomTabNavigator(
  {
    Home
  },
  {
    mode: "card",
    headerMode: "screen",
    tintColor: "#ffffff",
    navigationOptions: {
      headerTitle: (
        <View style={{ flex: 1, height: 150, backgroundColor: "#fdc011" }} />
      ),
      headerStyle: {
        height: 50,
        backgroundColor: "transparent",
        opacity: 1,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        borderBottomWidth: 0
      },
      headerTintColor: "#fff"
    },
    cardStyle: {
      shadowColor: "transparent",
      backgroundColor: "transparent"
    }
  }
);

export default createSwitchNavigator({
  TitleAnim,
  StackNav
});
