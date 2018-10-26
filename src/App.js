import React, { Component } from "react";
import { ThemeContext, themes } from "./ThemeContext";
// import styled from "styled-components";
import SwitchNav from "./Routes";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.themeToggler = () => {
      this.setState(state => ({
        theme: state.theme === themes.light ? themes.dark : themes.light
      }));
    };

    this.state = {
      theme: themes.dark
    };
  }

  render() {
    // console.log(this.state);
    return (
      <ThemeContext.Provider value={this.state}>
        <SwitchNav />
      </ThemeContext.Provider>
    );
  }
}
