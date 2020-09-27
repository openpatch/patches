import * as CSS from "csstype";
export { background } from "styled-system";
import { ResponsiveProp } from "./types";

export type BackgroundProps = {
  background?: ResponsiveProp<CSS.Properties["background"]>;
  backgroundImage?: ResponsiveProp<CSS.Properties["backgroundImage"]>;
  backgroundSize?: ResponsiveProp<CSS.Properties["backgroundSize"]>;
  backgroundPosition?: ResponsiveProp<CSS.Properties["backgroundPosition"]>;
  backgroundRepeat?: ResponsiveProp<CSS.Properties["backgroundRepeat"]>;
};
