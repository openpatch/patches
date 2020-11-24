import "@emotion/react";
import * as CSS from "csstype";

import {
  SystemBorderWidths,
  SystemBreakpoints,
  SystemColor,
  SystemCursor,
  SystemFonts,
  SystemFontSizes,
  SystemFontWeights,
  SystemLetterSpacings,
  SystemLineHeights,
  SystemRadii,
  SystemShadows,
  SystemSizes,
  SystemSpace,
  SystemZIndices,
} from "../src/system/types";
import { Color } from "../src/themes/colors";

type ThemeColor = Exclude<CSS.Properties["color"], undefined>;

declare module "@emotion/react" {
  export interface Theme {
    breakpoints: SystemBreakpoints;
    borderWidths: Record<SystemBorderWidths, CSS.Properties["borderWidth"]>;
    radii: Record<SystemRadii, CSS.Properties["borderRadius"]>;
    shadows: Record<SystemShadows, CSS.Properties["boxShadow"]>;
    space: Record<SystemSpace, CSS.Properties["width"]>;
    sizes: Record<SystemSizes, CSS.Properties["width"]>;
    fonts: Record<SystemFonts, CSS.Properties["fontFamily"]>;
    fontSizes: Record<SystemFontSizes, CSS.Properties["fontSize"]>;
    fontWeights: Record<SystemFontWeights, CSS.Properties["fontWeight"]>;
    lineHeights: Record<SystemLineHeights, CSS.Properties["lineHeight"]>;
    letterSpacings: Record<
      SystemLetterSpacings,
      CSS.Properties["letterSpacing"]
    >;
    zIndices: Record<SystemZIndices, CSS.Properties["zIndex"]>;
    cursor: Record<SystemCursor, CSS.Properties["cursor"]>;
    colors: {
      transparent: "transparent";
      currentColor: "currentColor";
      text: ThemeColor;
      background: ThemeColor;
      card: ThemeColor;
      primary: Color;
      accent: Color;
      neutral: Color;
      success: Color;
      warning: Color;
      error: Color;
      info: Color;
    };
  }
}
