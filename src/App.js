import React, { Component } from "react";
import { ThemeContext, themes } from "./ThemeContext";
import styled from "styled-components";
import SwitchNav from "./Routes";
import { StatusBar } from "react-native";

const BGImage = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  flex-wrap: nowrap;
  overflow: hidden;
`;

export default class App extends Component {
  static navigationOptions = {
    header: {
      visible: false
    }
  };
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
        {/* <MainContainer> */}
        <BGImage
          style={{
            resizeMode: "cover"
          }}
          source={this.state.theme.bg_image}
        >
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent={true}
          />
          <SwitchNav />
        </BGImage>
        {/* </MainContainer> */}
      </ThemeContext.Provider>
    );
  }
}
