import { DefaultTheme } from "styled-components";
import { blue, purple, red, yellow, teal, blueGrey, Color } from "./colors";

export interface Palette {
  /**
   * These are the splashes of color that should appear the most in your UI,
   and are the ones that determine the overall "look" of the site. Use these
   for things like primary actions, links, navigation items, icons, accent
   borders, or text you want to emphasize.
   */
  primary: Color;
  background: string;
  /**
   * These are the colors you will use the most and will make up the majority
   of your UI. Use them for most of your text, backgrounds, and borders, as
   well as for things like secondary buttons and links.
   */
  neutrals: Color;
  /**
   * These colors should be used fairly conservatively throughout your UI to
   avoid overpowering your primary colors. Use them when you need an element
   to stand out, or to reinforce things like error states or positive trends
   with the appropriate semantic color.
   */
  supporting: {
    accent: Color;
    success: Color;
    info: Color;
    warning: Color;
    error: Color;
  };
}

const lightPalette: Palette = {
  primary: teal,
  neutrals: blueGrey,
  background: "#fff",
  supporting: {
    accent: purple,
    info: blue,
    error: red,
    warning: yellow,
    success: teal,
  },
};

const makeTheme = (palette: Palette): DefaultTheme => ({
  palette,
  screens: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
  spacing: {
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 24,
    6: 32,
    7: 48,
    8: 64,
    9: 96,
    10: 128,
  },
  fontFamily: {
    display: ["Nunito Sans", "sans-serif"].join(", "),
    body: ["Nunito Sans", "sans-serif"].join(", "),
    code: [""].join(", "),
  },
  boxShadow: {
    1: "0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24)",
    2: "0 3px 6px rgba(0, 0, 0, .16), 0 2px 4px rgba(0, 0, 0, .12)",
    3: "0 10px 20px rgba(0, 0, 0, .15), 0 3px 6px rgba(0, 0, 0, .10)",
    4: "0 15px 25px rgba(0, 0, 0, .15), 0 5px 10px rgba(0, 0, 0, .05)",
    5: "0 20px 40px rgba(0, 0, 0, .2)",
  },
  borderRadius: {
    1: 4,
    2: 8,
    3: 16,
  },
  borderWidth: {
    1: 1,
    2: 2,
    3: 4,
    4: 8,
  },
  fontSize: {
    1: 12,
    2: 14,
    3: 16,
    4: 18,
    5: 20,
    6: 24,
    7: 30,
    8: 36,
    9: 48,
    10: 60,
  },
  fontWeight: {
    1: 400,
    2: 700,
    3: 800,
    4: 900,
  },
});

export default makeTheme(lightPalette);
