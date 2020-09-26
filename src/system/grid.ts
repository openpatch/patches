import * as CSS from "csstype";
import { SystemSpace, ResponsiveProp } from "./types";
export { grid } from "styled-system";

export type GridProps = {
  gridGap?: ResponsiveProp<SystemSpace>;
  gridRowGap?: ResponsiveProp<SystemSpace>;
  gridColumnGap?: ResponsiveProp<SystemSpace>;
  gridColumn?: ResponsiveProp<CSS.Properties["gridColumn"]>;
  gridRow?: ResponsiveProp<CSS.Properties["gridRow"]>;
  gridArea?: ResponsiveProp<CSS.Properties["gridArea"]>;
  gridAutoFlow?: ResponsiveProp<CSS.Properties["gridAutoFlow"]>;
  gridAutoRows?: ResponsiveProp<CSS.Properties["gridAutoRows"]>;
  gridAutoColumns?: ResponsiveProp<CSS.Properties["gridAutoColumns"]>;
  gridTemplateRows?: ResponsiveProp<CSS.Properties["gridTemplateRows"]>;
  gridTemplateColumns?: ResponsiveProp<CSS.Properties["gridTemplateColumns"]>;
  gridTemplateAreas?: ResponsiveProp<CSS.Properties["gridTemplateAreas"]>;
};
