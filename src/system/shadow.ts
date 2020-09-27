export { shadow } from "styled-system";
import { ResponsiveProp, SystemShadows } from "./types";

export type ShadowProps = {
  textShadow?: ResponsiveProp<SystemShadows>;
  boxShadow?: ResponsiveProp<SystemShadows>;
};
