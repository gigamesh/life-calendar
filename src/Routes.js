import {
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";
import TitleAnim from "./components/TitleAnim";
import Home from "./components/Home";

export const StackNav = createBottomTabNavigator({
  Home
});

export default createSwitchNavigator({
  TitleAnim,
  StackNav
});
