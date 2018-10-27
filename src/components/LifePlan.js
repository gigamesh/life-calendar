import React, { Component } from "react";
import styled from "styled-components/native";
import FullWrap from "./ui/FullWrap";
// import { ThemeContext } from "../ThemeContext";

const TextStyled = styled.Text`
  color: #fff;
  font-size: 26px;
`;

export default class LifePlan extends Component {
  render() {
    return (
      <FullWrap>
        <TextStyled>life plan</TextStyled>
      </FullWrap>
    );
  }
}
