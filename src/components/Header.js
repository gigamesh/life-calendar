import React from "react";
import styled from "styled-components/native";
import * as styles from "./helpers/styleConsts";
import { withNavigation } from "react-navigation";

const HeadWrap = styled.View`
  height: ${styles.HEADER};
  width: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  opacity: 0;
`;

const StyledText = styled.Text`
  font-size: 24;
  letter-spacing: 12;
  color: #fff;
`;

export default function Header(props) {
  // console.warn(props.headerVisible);
  return (
    <HeadWrap>
      <StyledText>LIFE CALENDAR</StyledText>
    </HeadWrap>
  );
}
