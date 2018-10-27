import React from "react";
import styled from "styled-components";
import * as styles from "../helpers/styleConsts";

const Wrap = styled.View`
  flex: 1;
  /* justify-content: center; */
  align-items: center;
  height: 100%;
  margin-top: ${styles.HEADER};
`;

export default function FullWrap(props) {
  return <Wrap>{props.children}</Wrap>;
}
