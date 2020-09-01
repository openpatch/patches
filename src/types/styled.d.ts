import "styled-components";
import { Palette } from "../shared/theme";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    palette: Palette;
    screens: Record<string, number>;
    spacing: Record<number, number>;
    fontSize: Record<number, number>;
    fontFamily: Record<string, string>;
    fontWeight: Record<number, number>;
    boxShadow: Record<string, string>;
    borderRadius: Record<number, number>;
    borderWidth: Record<number, number>;
  }
}
