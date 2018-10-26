import React from "react";
import { ThemeContext } from "./ThemeContext";
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

export default function BackgroundImage(props) {
  return (
    <ThemeContext.Consumer>
      {theme => {
        console.log(theme);
        return (
          <MainContainer>
            <BGImage
              style={{
                resizeMode: "cover"
              }}
              source={theme.bg_image}
            >
              {props.children}
            </BGImage>
          </MainContainer>
        );
      }}
    </ThemeContext.Consumer>
  );
}
