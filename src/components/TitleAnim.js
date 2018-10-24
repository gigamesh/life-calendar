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
    this.rotationAnims = [];
    this.rotateSpeed = new Animated.Value(0);
  }
  componentDidMount() {
    this.rotateLetters();
  }
  rotateLetters() {
    const animations = title.map(ch => {
      return Animated.timing(this.rotationAnims[ch], {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      });
    });
    Animated.stagger(30, animations).start();
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
