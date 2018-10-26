import { createSwitchNavigator, createStackNavigator } from "react-navigation";
import TitleAnim from "./components/TitleAnim";
import Home from "./components/Home";

export const StackNav = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        header: null,
        headerMode: "none",
        mode: "modal"
      })
    }
  },
  { headerMode: "none" }
);

export default createSwitchNavigator({
  TitleAnim,
  StackNav
});
