import React, { Component } from "react";
import { StyleSheet, View, Animated, Easing } from "react-native";
import TitleAnim from "./src/components/TitleAnim";
import styled from "styled-components/native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TitleAnim />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
