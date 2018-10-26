import React from "react";
import { ThemeContext, themes } from "./ThemeContext";
import styled from "styled-components";

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

const BGImage = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  overflow: hidden;
`;

export default class BackgroundImage extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => {
          console.log(JSON.stringify(theme.primary));
          // console.log(JSON.stringify(themes.dark.bg_image));
          return (
            <MainContainer>
              <BGImage
                style={{
                  resizeMode: "cover"
                }}
                source={theme.bg_image}
              >
                {this.props.children}
              </BGImage>
            </MainContainer>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
