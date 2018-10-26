import React, { Component } from "react";
import styled from "styled-components/native";

import { ThemeContext } from "../ThemeContext";
import BackgroundImage from "../BackgroundImage";

const TextStyled = styled.Text`
  color: #fff;
  size: 26px;
`;

export default class Home extends Component {
  render() {
    console.log("hommme!");
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <BackgroundImage>
            <TextStyled>home route</TextStyled>
          </BackgroundImage>
        )}
      </ThemeContext.Consumer>
    );
  }
}
