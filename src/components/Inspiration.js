import React, { Component } from "react";
import styled from "styled-components/native";
import { FullWrap } from "./ui/wrappers";
import * as Text from "./ui/textElements";

// import { ThemeContext } from "../ThemeContext";
export default class Inspiration extends Component {
  render() {
    return (
      <FullWrap>
        <Text.H1>Inspiration</Text.H1>
      </FullWrap>
    );
  }
}
