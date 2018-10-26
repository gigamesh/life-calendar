import React from "react";
import { View } from "react-native";

import {
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";
import TitleAnim from "./components/TitleAnim";
import Home from "./components/Home";
import AddEvent from "./components/AddEvent";

export const tabNav = createBottomTabNavigator(
  {
    Home,
    AddEvent
  },
  {
    navigationOptions: {
      backBehavior: "none",
      tabBarOptions: {
        style: {
          height: 50,
          backgroundColor: "transparent",
          borderBottomWidth: 0,
          borderTopWidth: 0,
          paddingBottom: 5
        },
        labelStyle: {
          color: "#fff",
          fontSize: 20
        }
      }
    },
    cardStyle: {
      shadowColor: "transparent",
      backgroundColor: "transparent"
    }
  }
);

export default createSwitchNavigator({
  TitleAnim,
  tabNav
});
