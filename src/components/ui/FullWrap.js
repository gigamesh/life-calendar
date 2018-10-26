import React from "react";
import styled from "styled-components";

const Wrap = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default function FullWrap(props) {
  return <Wrap>{props.children}</Wrap>;
}
