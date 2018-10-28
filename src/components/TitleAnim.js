import React, { Component } from "react";
import { Animated, Easing } from "react-native";
import styled from "styled-components/native";
import { ThemeContext } from "../ThemeContext";
import BackgroundImage from "../BackgroundImage";
import { withNavigation } from "react-navigation";
const title = "LIFE CALENDAR".split("");

let WrapAnim = styled.View`
  position: absolute;
  width: 100%;
`;
WrapAnim = Animated.createAnimatedComponent(WrapAnim);

let AnimTitle = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  flex: 1;
`;
AnimTitle = Animated.createAnimatedComponent(AnimTitle);

const Letter = styled.Text`
  color: ${({ color }) => color};
  font-size: 24px;
`;

let BorderTop = styled.View`
  position: absolute;
  left: 50%;
  height: 1;
  top: 0;
  background: ${({ color }) => color};
`;

BorderTop = Animated.createAnimatedComponent(BorderTop);

let BorderBottom = styled.View`
  position: absolute;
  right: 50%;
  bottom: -1;
  height: 1;
  background: ${({ color }) => color};
`;

BorderBottom = Animated.createAnimatedComponent(BorderBottom);

class TitleAnim extends Component {
  constructor() {
    super();
    this.rotationAnims = [];
    title.forEach(() => {
      this.rotationAnims.push(new Animated.Value(0));
    });
    this.paddingAnim = new Animated.Value(7);
    this.titleHeight = new Animated.Value(0);
    this.titleWidth = new Animated.Value(0);
    this.rightLeft = new Animated.Value(0);
    this.scale = new Animated.Value(1);
  }
  componentDidMount() {
    const stage1 = this.expandTitleBox();
    const stage2 = Animated.parallel([
      this.rotateLetters(),
      this.spaceLetters()
    ]);
    const stage3 = this.zoomOutTitle();
    Animated.sequence([stage1, stage2, Animated.delay(800), stage3]).start(
      () => {
        this.props.screenProps.isIntroDone();
        this.props.navigation.navigate("Home");
      }
    );
  }
  rotateLetters = () => {
    const animations = title.map((_, i) => {
      return Animated.timing(this.rotationAnims[i], {
        toValue: 1,
        duration: 250,
        easing: Easing.quad
      });
    });
    return Animated.stagger(50, animations);
  };
  spaceLetters = () => {
    return Animated.timing(this.paddingAnim, {
      toValue: 8,
      duration: 800,
      easing: Easing.linear
    });
  };
  expandTitleBox = () => {
    // console.log("expandTitleBox");
    const height = Animated.timing(this.titleHeight, {
      toValue: 33,
      duration: 200,
      easing: Easing.linear
    });
    const width = Animated.timing(this.titleWidth, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear
    });
    const rightLeft = Animated.timing(this.rightLeft, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear
    });
    const bars = Animated.parallel([rightLeft, width]);
    return Animated.sequence([bars, height]);
  };
  zoomOutTitle = () => {
    const scale = Animated.timing(this.scale, {
      toValue: 0,
      duration: 600
    });
    const barWidths = Animated.timing(this.titleWidth, {
      toValue: 0,
      duration: 600
    });
    return Animated.parallel([scale, barWidths]);
  };
  render() {
    const rotateY = title.map((_, i) => {
      return this.rotationAnims[i].interpolate({
        inputRange: [0, 1],
        outputRange: ["90deg", "0deg"]
      });
    });
    const width = this.titleWidth.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "100%"]
    });
    const rightLeft = this.rightLeft.interpolate({
      inputRange: [0, 1],
      outputRange: ["50%", "0%"]
    });
    const titleText = theme => {
      return title.map((ch, i) => (
        <Animated.View
          style={{
            transform: [{ perspective: 1000 }, { rotateY: rotateY[i] }],
            marginLeft: this.paddingAnim,
            marginRight: this.paddingAnim
          }}
          key={i}
        >
          <Letter color={theme.primary}>{ch}</Letter>
        </Animated.View>
      ));
    };

    return (
      <BackgroundImage>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <WrapAnim
              style={{
                height: this.titleHeight
              }}
            >
              <BorderTop
                color={theme.primary}
                style={{
                  width: width,
                  left: rightLeft
                }}
              />
              <AnimTitle style={{ transform: [{ scale: this.scale }] }}>
                {titleText(theme)}
              </AnimTitle>
              <BorderBottom
                color={theme.primary}
                style={{
                  width: width,
                  right: rightLeft
                }}
              />
            </WrapAnim>
          )}
        </ThemeContext.Consumer>
      </BackgroundImage>
    );
  }
}

export default withNavigation(TitleAnim);
