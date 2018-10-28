import React from "react";
import styled from "styled-components";
import * as styles from "../helpers/styleConsts";

const Wrap1 = styled.View`
  flex: 1;
  align-items: center;
  height: 100%;
  margin-top: 10;
`;

export const FullWrap = props => {
  return <Wrap1>{props.children}</Wrap1>;
};

const Wrap2 = styled.View`
  flex: 1;
  align-items: center;
  height: 75%;
  width: 90%;
  /* border: 1px solid #ddd; */
  overflow: hidden;
`;

export const InnerWrap = props => {
  return <Wrap2>{props.children}</Wrap2>;
};
