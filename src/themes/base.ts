import { Theme } from "@emotion/react";
import { coolGrey, red, yellow, blue, teal, purple } from "./colors";

const base: Theme = {
  breakpoints: ["768px", "1024px"],
  space: {
    xxsmall: "4px",
    xsmall: "8px",
    small: "16px",
    medium: "24px",
    large: "32px",
    xlarge: "48px",
    xxlarge: "64px",
    standard: "16px",
    none: "0px",
    gutter: "8px",
    auto: "auto",
    full: "100%",
  },
  sizes: {
    xsmall: "400px",
    small: "600px",
    medium: "940px",
    large: "1280px",
  },
  fonts: {
    body:
      'Rubik, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "Rubik, system-ui",
    monospace: '"Ubuntu Mono", Menlo, monospace',
  },
  fontSizes: {
    xsmall: "12px",
    small: "14px",
    medium: "16px",
    large: "20px",
    xlarge: "24px",
    xxlarge: "32px",
    standard: "16px",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    standard: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    standard: "1.5",
    relaxed: "1.625",
    loose: "2",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    standard: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  colors: {
    currentColor: "currentColor",
    transparent: "transparent",
    text: coolGrey[900],
    background: coolGrey[50],
    card: "#fff",
    primary: teal,
    accent: purple,
    neutral: coolGrey,
    success: teal,
    warning: yellow,
    error: red,
    info: blue,
  },
  borderWidths: {
    standard: "1px",
    none: "0",
    light: "2px",
    medium: "4px",
    semibold: "8px",
  },
  radii: {
    none: "0",
    small: "4px",
    standard: "8px",
    medium: "10px",
    large: "12px",
    full: "9999px",
  },
  shadows: {
    xsmall: "0 0 0 1px rgba(0, 0, 0, 0.05)",
    small: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    standard: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    medium:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    large:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xlarge:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    xxlarge: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
    none: "none",
  },
  zIndices: {
    auto: "auto",
    "0": 0,
    "10": 10,
    "20": 20,
    "30": 30,
    "40": 40,
    "50": 50,
  },
  cursor: {
    auto: "auto",
    default: "default",
    pointer: "pointer",
    wait: "wait",
    text: "text",
    move: "move",
    "not-allowed": "not-allowed",
  },
};

export default base;
