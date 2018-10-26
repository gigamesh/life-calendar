import React from "react";
import { Image } from "react-native";

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
    navigationOptions: {
      headerTitle: (
        <Image
          style={{ flex: 1, height: 150, backgroundColor: "#fdc011" }}
          resizeMode="contain"
          source={require("../assets/img/sky-night.jpg")}
        />
      ),
      headerStyle: { height: 150, backgroundColor: "transparent", opacity: 1 }
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
