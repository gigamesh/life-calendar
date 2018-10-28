import React, { Component } from "react";
import { ThemeContext, themes } from "./ThemeContext";
import styled from "styled-components";
import SwitchNav from "./Routes";
import { StatusBar } from "react-native";
// import Header from "./components/Header";

const BGImage = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
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
      theme: themes.dark,
      headerVisible: false
    };
  }

  isIntroDone = () => {
    this.setState({
      headerVisible: true
    });
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {/* <MainContainer> */}
        <BGImage
          style={{
            resizeMode: "cover"
          }}
          source={this.state.theme.bg_image}
        >
          {/* <Header headerVisible={this.state.headerVisible} /> */}
          <StatusBar
            hidden={true}
            barStyle="light-content"
            backgroundColor="transparent"
            translucent={true}
          />
          <SwitchNav screenProps={{ isIntroDone: this.isIntroDone }} />
        </BGImage>
        {/* </MainContainer> */}
      </ThemeContext.Provider>
    );
  }
}
