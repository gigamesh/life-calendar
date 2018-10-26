import React, { Component } from "react";
import TitleAnim from "./components/TitleAnim";
import { ThemeContext, themes } from "./ThemeContext";
import styled from "styled-components";
import SwitchNav from "./Routes";

const MainContainer = styled.View`
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  overflow: hidden;
`;

const BackgroundImage = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  overflow: hidden;
`;

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
    console.log(this.state.theme.bg_image);
    return (
      <ThemeContext.Provider value={this.state}>
        <MainContainer>
          <BackgroundImage
            style={{
              resizeMode: "cover"
            }}
            source={this.state.theme.bg_image}
          >
            <SwitchNav />
          </BackgroundImage>
        </MainContainer>
      </ThemeContext.Provider>
    );
  }
}
