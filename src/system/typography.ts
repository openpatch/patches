import * as CSS from "csstype";
export { typography } from "styled-system";
import {
  ResponsiveProp,
  SystemFonts,
  SystemFontWeights,
  SystemLineHeights,
  SystemLetterSpacings,
  SystemFontSizes,
} from "./types";

export type TypographyProps = {
  fontFamily?: ResponsiveProp<SystemFonts>;
  fontSize?: ResponsiveProp<SystemFontSizes>;
  fontWeight?: ResponsiveProp<SystemFontWeights>;
  lineHeight?: ResponsiveProp<SystemLineHeights>;
  letterSpacing?: ResponsiveProp<SystemLetterSpacings>;
  textAlign?: ResponsiveProp<CSS.Properties["textAlign"]>;
  fontStyle?: ResponsiveProp<CSS.Properties["fontStyle"]>;
};
