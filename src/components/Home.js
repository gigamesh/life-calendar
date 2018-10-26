import React, { Component } from "react";
import styled from "styled-components/native";

// import { ThemeContext } from "../ThemeContext";
import BackgroundImage from "../BackgroundImage";

const TextStyled = styled.Text`
  color: #fff;
  size: 26px;
`;

export default class Home extends Component {
  static navigationOptions = {
    header: navigation => ({
      visible: true,
      style: Styles.navBar,
      tintColor: "white"
    })
  };
  render() {
    console.log("hommme!");
    return <TextStyled>home route</TextStyled>;
  }
}
