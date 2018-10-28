import React, { Component } from "react";
import { Animated, Easing, StyleSheet, View } from "react-native";
import PinchZoomView from "react-native-pinch-zoom-view";

export default class TimeGrid extends Component {
  state = {
    dimensions: undefined
  };

  getCellDimensions = () => {};

  logWelcomeLayout = (ox, oy, width, height, px, py) => {
    console.log("ox: " + ox);
    console.log("oy: " + oy);
    console.log("width: " + width);
    console.log("height: " + height);
    console.log("px: " + px);
    console.log("py: " + py);
  };

  componentDidMount() {
    // this.refs.pinchView.measure(this.logWelcomeLayout);
  }
  render() {
    console.warn("timegrid render");
    // console.log(this.state.dimensions);
    return (
      <PinchZoomView
        style={styles.container}
        maxScale={10}
        minScale={1}
        ref={"pinchView"}
      >
        <View style={styles.cell}>
          <View style={styles.cellFill} />
        </View>
      </PinchZoomView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  row: {},
  cell: {
    height: 10,
    width: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#eee"
  },
  cellFill: {
    opacity: 0.2,
    backgroundColor: "#eee",
    flex: 1
  }
});
