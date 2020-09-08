import { Theme } from "./";
import { blueGrey, red, yellow, blue, teal, purple } from "./colors";

const base: Theme = {
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  mq: function (bq) {
    return `@media (min-width: ${this.breakpoints[bq]})`;
  },
  spacing: {
    "4": "4px",
    "8": "8px",
    "16": "16px",
    "24": "24px",
    "32": "32px",
    "48": "48px",
    "64": "64px",
    "96": "96px",
    "128": "128px",
    "256": "256px",
    "384": "384px",
    "512": "512px",
    "640": "640px",
    "768": "768px",
    default: "16px",
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: {
    "12": "12px",
    "14": "14px",
    "16": "16px",
    "20": "20px",
    "24": "24px",
    "32": "32px",
    "48": "48px",
    "64": "64px",
    "96": "96px",
    default: "16px",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
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
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
  },
  baseColors: {
    transparent: "transparent",
    text: blueGrey[900],
    background: blueGrey[50],
    card: "#fff",
  },
  colors: {
    primary: teal,
    accent: purple,
    neutral: blueGrey,
    success: teal,
    warning: yellow,
    error: red,
    info: blue,
  },
  borderWidths: {
    default: "1px",
    "0": "0",
    "2": "2px",
    "4": "4px",
    "8": "8px",
  },
  borderRadius: {
    none: "0",
    sm: "4px",
    default: "8px",
    md: "10px",
    lg: "12px",
    full: "9999px",
  },
  boxShadows: {
    xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    default: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
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
  styles: {
    pairs: {
      primary: {
        bg: "50",
        fg: "700",
      },
      accent: {
        bg: "50",
        fg: "600",
      },
      neutral: {
        bg: "50",
        fg: "600",
      },
      success: {
        bg: "50",
        fg: "700",
      },
      warning: {
        bg: "50",
        fg: "800",
      },
      error: {
        bg: "50",
        fg: "600",
      },
      info: {
        bg: "50",
        fg: "600",
      },
    },
  },
};

export default base;
