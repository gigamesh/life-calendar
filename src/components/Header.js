import React from "react";
import styled from "styled-components/native";
import * as styles from "./helpers/styleConsts";
import * as Animatable from "react-native-animatable";

let HeadWrap = styled.View`
  height: ${styles.HEADER};
  width: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  opacity: 0;
`;

HeadWrap = Animatable.createAnimatableComponent(HeadWrap);

const StyledText = styled.Text`
  font-size: 24;
  letter-spacing: 12;
  color: #eee;
`;

export default class Header extends React.Component {
  render() {
    let opacity = this.props.headerVisible ? 0.9 : 0;
    let translateY = this.props.headerVisible ? 0 : -30;

    return (
      <HeadWrap
        transition={["opacity", "translateY"]}
        duration={800}
        style={{ opacity, translateY }}
      >
        <StyledText>{this.props.children}</StyledText>
      </HeadWrap>
    );
  }
}
