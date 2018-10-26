import React from "react";

export const themes = {
  light: {
    primary: "#245893",
    background: "#fff",
    bg_image: require("../assets/img/sky-day.jpg")
  },
  dark: {
    primary: "#fff",
    background: "#222",
    bg_image: require("../assets/img/sky-night.jpg")
  }
};

export const ThemeContext = React.createContext(themes.dark);
