import * as CSS from "csstype";

export type Scale<T> = T[] | { [K: string]: T | Scale<T>; [I: number]: T };

type Color = Exclude<CSS.Properties["color"], undefined>;

export type ThemeColor = {
  "50": Color;
  "100": Color;
  "200": Color;
  "300": Color;
  "400": Color;
  "500": Color;
  "600": Color;
  "700": Color;
  "800": Color;
  "900": Color;
};

export type ThemeColorPair = {
  fg: keyof ThemeColor;
  bg: keyof ThemeColor;
};

export type Theme = {
  breakpoints: {
    [key: string]: CSS.Properties["width"];
    sm: CSS.Properties["width"];
    md: CSS.Properties["width"];
    lg: CSS.Properties["width"];
    xl: CSS.Properties["width"];
  };
  mq: (bp: keyof Theme["breakpoints"]) => string;
  borderWidths: {
    default: CSS.Properties["borderWidth"];
    "0": CSS.Properties["borderWidth"];
    "2": CSS.Properties["borderWidth"];
    "4": CSS.Properties["borderWidth"];
    "8": CSS.Properties["borderWidth"];
  };
  borderRadius: {
    none: CSS.Properties["borderRadius"];
    sm: CSS.Properties["borderRadius"];
    default: CSS.Properties["borderRadius"];
    md: CSS.Properties["borderRadius"];
    lg: CSS.Properties["borderRadius"];
    full: CSS.Properties["borderRadius"];
  };
  boxShadows: {
    xs: CSS.Properties["boxShadow"];
    sm: CSS.Properties["boxShadow"];
    default: CSS.Properties["boxShadow"];
    md: CSS.Properties["boxShadow"];
    lg: CSS.Properties["boxShadow"];
    xl: CSS.Properties["boxShadow"];
    "2xl": CSS.Properties["boxShadow"];
    inner: CSS.Properties["boxShadow"];
    outline: CSS.Properties["boxShadow"];
    none: CSS.Properties["boxShadow"];
  };
  spacing: {
    "4": CSS.Properties["width"];
    "8": CSS.Properties["width"];
    "16": CSS.Properties["width"];
    "24": CSS.Properties["width"];
    "32": CSS.Properties["width"];
    "48": CSS.Properties["width"];
    "64": CSS.Properties["width"];
    "96": CSS.Properties["width"];
    "128": CSS.Properties["width"];
    "256": CSS.Properties["width"];
    "384": CSS.Properties["width"];
    "512": CSS.Properties["width"];
    "640": CSS.Properties["width"];
    "768": CSS.Properties["width"];
    default: CSS.Properties["width"];
  };
  fonts: {
    body: CSS.Properties["fontFamily"];
    heading: CSS.Properties["fontFamily"];
    monospace: CSS.Properties["fontFamily"];
  };
  fontSizes: {
    "12": CSS.Properties["fontSize"];
    "14": CSS.Properties["fontSize"];
    "16": CSS.Properties["fontSize"];
    "20": CSS.Properties["fontSize"];
    "24": CSS.Properties["fontSize"];
    "32": CSS.Properties["fontSize"];
    "48": CSS.Properties["fontSize"];
    "64": CSS.Properties["fontSize"];
    "96": CSS.Properties["fontSize"];
    default: CSS.Properties["fontSize"];
  };
  fontWeights: {
    hairline: CSS.Properties["fontWeight"];
    thin: CSS.Properties["fontWeight"];
    light: CSS.Properties["fontWeight"];
    normal: CSS.Properties["fontWeight"];
    medium: CSS.Properties["fontWeight"];
    semibold: CSS.Properties["fontWeight"];
    bold: CSS.Properties["fontWeight"];
    extrabold: CSS.Properties["fontWeight"];
    black: CSS.Properties["fontWeight"];
  };
  lineHeights: {
    none: CSS.Properties["lineHeight"];
    tight: CSS.Properties["lineHeight"];
    snug: CSS.Properties["lineHeight"];
    normal: CSS.Properties["lineHeight"];
    relaxed: CSS.Properties["lineHeight"];
    loose: CSS.Properties["lineHeight"];
  };
  zIndices: {
    auto: CSS.Properties["zIndex"];
    "0": CSS.Properties["zIndex"];
    "10": CSS.Properties["zIndex"];
    "20": CSS.Properties["zIndex"];
    "30": CSS.Properties["zIndex"];
    "40": CSS.Properties["zIndex"];
    "50": CSS.Properties["zIndex"];
  };
  cursor: {
    auto: CSS.Properties["cursor"];
    default: CSS.Properties["cursor"];
    pointer: CSS.Properties["cursor"];
    wait: CSS.Properties["cursor"];
    text: CSS.Properties["cursor"];
    move: CSS.Properties["cursor"];
    "not-allowed": CSS.Properties["cursor"];
  };
  baseColors: {
    transparent: "transparent";
    text: CSS.Properties["color"];
    background: CSS.Properties["color"];
    card: CSS.Properties["color"];
  };
  colors: {
    primary: ThemeColor;
    accent: ThemeColor;
    neutral: ThemeColor;
    success: ThemeColor;
    warning: ThemeColor;
    error: ThemeColor;
    info: ThemeColor;
  };
  styles: {
    pairs: Record<keyof Theme["colors"], ThemeColorPair>;
  };
  // ...
};
