import React, { Component } from "react";
import { Animated, Easing } from "react-native";
import styled from "styled-components/native";

const title = "LIFE CALENDAR";

const Title = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;
const Letter = styled.Text`
  color: #5c90ce;
  font-size: 24px;
  margin: 0 7px;
`;

export default class TitleAnim extends Component {
  constructor() {
    super();
    this.rotateSpeed = new Animated.Value(0);
  }
  componentDidMount() {
    this.rotateLetters();
  }
  rotateLetters() {
    Animated.timing(this.rotateSpeed, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear
    }).start();
  }
  render() {
    const rotate = this.rotateSpeed.interpolate({
      inputRange: [0, 1],
      outputRange: ["90deg", "0deg"]
    });
    const titleText = () => {
      return title.split("").map((ch, i) => (
        <Animated.View
          style={{
            transform: [{ perspective: 1000 }, { rotateY: rotate }]
          }}
          key={i}
        >
          <Letter>{ch}</Letter>
        </Animated.View>
      ));
    };
    return <Title>{titleText()}</Title>;
  }
}
