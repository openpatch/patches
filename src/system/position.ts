import * as CSS from "csstype";
export { position } from "styled-system";
import { ResponsiveProp, SystemSpace, SystemZIndices } from "./types";

export type PositionProps = {
  position?: ResponsiveProp<CSS.Properties["position"]>;
  zIndex?: ResponsiveProp<SystemZIndices>;
  top?: ResponsiveProp<SystemSpace | CSS.Properties["top"]>;
  right?: ResponsiveProp<SystemSpace | CSS.Properties["right"]>;
  bottom?: ResponsiveProp<SystemSpace | CSS.Properties["bottom"]>;
  left?: ResponsiveProp<SystemSpace | CSS.Properties["left"]>;
};
