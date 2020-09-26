import { system } from "styled-system";
import { SystemColor, ResponsiveProp } from "./types";

export type ColorProps = {
  textColor?: ResponsiveProp<SystemColor>;
  backgroundColor?: ResponsiveProp<SystemColor>;
  bg?: ResponsiveProp<SystemColor>;
};

export const color = system({
  textColor: {
    scale: "colors",
    property: "color",
  },
  backgroundColor: {
    scale: "colors",
    property: "backgroundColor",
  },
  bg: {
    scale: "colors",
    property: "backgroundColor",
  },
});
