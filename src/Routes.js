import React from "react";
import Icon from "react-native-vector-icons/SimpleLineIcons";

import {
  createSwitchNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import TitleAnim from "./components/TitleAnim";
import * as styles from "./components/helpers/styleConsts";
import Home from "./components/Home";
import AddEvent from "./components/AddEvent";
import LifePlan from "./components/LifePlan";
import Analytics from "./components/Analytics";
import Settings from "./components/Settings";

export const tabNav = createMaterialTopTabNavigator(
  {
    Home,
    AddEvent,
    LifePlan,
    Analytics,
    Settings
  },
  {
    tabBarPosition: "bottom",
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        console.log(routeName);
        let iconName;
        switch (routeName) {
          case "Home":
            iconName = "calendar";
            break;
          case "AddEvent":
            iconName = "note";
            break;
          case "LifePlan":
            iconName = "map";
            break;
          case "Analytics":
            iconName = "bulb";
            break;
          case "Settings":
            iconName = "settings";
            break;
          default:
            iconName = "user";
        }
        console.log(iconName);
        return <Icon name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      inactiveBackgroundColor: "transparent",
      activeBackgroundColor: "transparent",
      showIcon: true,
      showLabel: false,
      indicatorStyle: {
        backgroundColor: "#fff",
        height: 1
      },
      style: {
        height: styles.FOOTER,
        backgroundColor: "transparent",
        justifyContent: "center"
      },
      tabStyle: {
        justifyContent: "center"
      },
      iconStyle: {},
      labelStyle: {
        color: "#fff",
        fontSize: 12,
        padding: 0,
        margin: 0
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
