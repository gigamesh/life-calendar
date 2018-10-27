import React, { Component } from "react";
import styled from "styled-components/native";
import FullWrap from "./ui/FullWrap";
// import { ThemeContext } from "../ThemeContext";

const TextStyled = styled.Text`
  color: #fff;
  font-size: 26px;
`;

export default class AddEvent extends Component {
  render() {
    return (
      <FullWrap>
        <TextStyled>add event</TextStyled>
      </FullWrap>
    );
  }
}
