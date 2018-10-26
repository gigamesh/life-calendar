import React, { Component } from "react";
import { Animated, Easing } from "react-native";
import styled from "styled-components/native";
import FullWrap from "./ui/FullWrap";
import { animTiming } from "./helpers/animations";
// import { ThemeContext } from "../ThemeContext";

let TextStyled = styled.Text`
  color: #fff;
  size: 26px;
`;

TextStyled = Animated.createAnimatedComponent(TextStyled);

export default class Home extends Component {
  constructor() {
    super();
    this.opacity = new Animated.Value(0);
  }
  // static navigationOptions = {
  //   tabBarOptions: {
  //     style: {
  //       height: 50,
  //       backgroundColor: "transparent",
  //       borderBottomWidth: 0,
  //       opacity: 0.5
  //     },
  //     labelStyle: {
  //       color: "#fff",
  //       fontSize: 20
  //     }
  //   }
  // };
  componentDidMount() {
    animTiming(this.opacity, 300).start();
  }
  render() {
    console.log("hommme!");
    return (
      <FullWrap>
        <TextStyled style={{ opacity: this.opacity }}>home route</TextStyled>
      </FullWrap>
    );
  }
}
