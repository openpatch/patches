import * as CSS from "csstype";
import { SystemBorderWidths, SystemColor, SystemRadii } from "./types";
export { border } from "styled-system";
import { ResponsiveProp } from "./types";

export type BorderProps = {
  borderStyle?: ResponsiveProp<CSS.Properties["borderStyle"]>;
  borderWidth?: ResponsiveProp<SystemBorderWidths>;
  borderColor?: ResponsiveProp<SystemColor>;
  borderRadius?: ResponsiveProp<SystemRadii>;
  borderTopStyle?: ResponsiveProp<CSS.Properties["borderStyle"]>;
  borderTopWidth?: ResponsiveProp<SystemBorderWidths>;
  borderTopColor?: ResponsiveProp<SystemColor>;
  borderTopLeftRadius?: ResponsiveProp<SystemRadii>;
  borderTopRightRadius?: ResponsiveProp<SystemRadii>;
  borderBottomStyle?: ResponsiveProp<CSS.Properties["borderStyle"]>;
  borderBottomWidth?: ResponsiveProp<SystemBorderWidths>;
  borderBottomColor?: ResponsiveProp<SystemColor>;
  borderBottomLeftRadius?: ResponsiveProp<SystemRadii>;
  borderBottomRightRadius?: ResponsiveProp<SystemRadii>;
  borderLeftStyle?: ResponsiveProp<CSS.Properties["borderStyle"]>;
  borderLeftWidth?: ResponsiveProp<SystemBorderWidths>;
  borderLeftColor?: ResponsiveProp<SystemColor>;
  borderRightStyle?: ResponsiveProp<CSS.Properties["borderStyle"]>;
  borderRightWidth?: ResponsiveProp<SystemBorderWidths>;
  borderRightColor?: ResponsiveProp<SystemColor>;
};
