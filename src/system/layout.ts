import * as CSS from "csstype";
export { layout } from "styled-system";
import { ResponsiveProp, SystemSizes } from "./types";

export type LayoutProps = {
  width?: ResponsiveProp<SystemSizes | CSS.Properties["width"]>;
  height?: ResponsiveProp<SystemSizes | CSS.Properties["width"]>;
  minWidth?: ResponsiveProp<SystemSizes | CSS.Properties["width"]>;
  maxWidth?: ResponsiveProp<SystemSizes | CSS.Properties["width"]>;
  minHeight?: ResponsiveProp<SystemSizes | CSS.Properties["width"]>;
  maxHeight?: ResponsiveProp<SystemSizes | CSS.Properties["width"]>;
  size?: ResponsiveProp<SystemSizes>;
  display?: ResponsiveProp<CSS.Properties["display"]>;
  verticalAlign?: ResponsiveProp<CSS.Properties["verticalAlign"]>;
  overflow?: ResponsiveProp<CSS.Properties["overflow"]>;
  overflowX?: ResponsiveProp<CSS.Properties["overflowX"]>;
  overflowY?: ResponsiveProp<CSS.Properties["overflowY"]>;
};
