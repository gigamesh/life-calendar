import React, { Component } from "react";
import { Animated, Easing } from "react-native";
import { FullWrap, InnerWrap } from "./ui/wrappers";
import TimeGrid from "./TimeGrid";
import * as Text from "./ui/textElements";
import { animTiming } from "./helpers/animations";

// import { ThemeContext } from "../ThemeContext";

Header2 = Animated.createAnimatedComponent(Text.H1);

class Home extends Component {
  constructor() {
    super();
    this.opacity = new Animated.Value(0);
  }
  static navigationOptions = {
    title: "Home"
  };
  componentDidMount() {
    animTiming(this.opacity, 300).start();
  }
  render() {
    return (
      <FullWrap>
        <Header2 style={{ opacity: this.opacity }}>Your Life In Weeks</Header2>
        <InnerWrap>
          <TimeGrid />
        </InnerWrap>
      </FullWrap>
    );
  }
}

export default Home;
