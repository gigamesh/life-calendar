import React, { Component } from "react";

import styled from "styled-components/native";
import { ThemeContext } from "../ThemeContext";

const TextStyled = styled.Text`
  color: #fff;
  size: 26px;
`;

export default class Home extends Component {
  render() {
    console.log("hommme!");
    return (
      <ThemeContext.Consumer>
        {({ theme }) => <TextStyled>home route</TextStyled>}
      </ThemeContext.Consumer>
    );
  }
}
