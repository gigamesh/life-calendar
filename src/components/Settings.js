import React, { Component } from "react";
import styled from "styled-components/native";
import { FullWrap } from "./ui/wrappers";
import * as Text from "./ui/textElements";
// import { ThemeContext } from "../ThemeContext";

export default class Settings extends Component {
  render() {
    return (
      <FullWrap>
        <Text.H1>Settings</Text.H1>
      </FullWrap>
    );
  }
}
