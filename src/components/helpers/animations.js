import { Animated, Easing } from "react-native";

export const animTiming = (anim, duration, easing) => {
  return Animated.timing(anim, {
    toValue: 1,
    duration: duration,
    easing: Easing[easing] || Easing.linear
  });
};
