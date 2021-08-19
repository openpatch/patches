import { compose, space as styledSpace, system } from "styled-system";
import { ResponsiveProp, SystemSpace } from "./types";

export const space = compose(
  styledSpace,
  system({
    gap: {
      property: "gap",
      scale: "space",
    },
  })
);

export type SpaceProps = {
  m?: ResponsiveProp<SystemSpace>;
  mt?: ResponsiveProp<SystemSpace>;
  mb?: ResponsiveProp<SystemSpace>;
  mr?: ResponsiveProp<SystemSpace>;
  ml?: ResponsiveProp<SystemSpace>;
  mx?: ResponsiveProp<SystemSpace>;
  my?: ResponsiveProp<SystemSpace>;
  p?: ResponsiveProp<SystemSpace>;
  pt?: ResponsiveProp<SystemSpace>;
  pb?: ResponsiveProp<SystemSpace>;
  pr?: ResponsiveProp<SystemSpace>;
  pl?: ResponsiveProp<SystemSpace>;
  px?: ResponsiveProp<SystemSpace>;
  py?: ResponsiveProp<SystemSpace>;
  margin?: ResponsiveProp<SystemSpace>;
  marginTop?: ResponsiveProp<SystemSpace>;
  marginBottom?: ResponsiveProp<SystemSpace>;
  marginRight?: ResponsiveProp<SystemSpace>;
  marginLeft?: ResponsiveProp<SystemSpace>;
  marginX?: ResponsiveProp<SystemSpace>;
  marginY?: ResponsiveProp<SystemSpace>;
  padding?: ResponsiveProp<SystemSpace>;
  paddingTop?: ResponsiveProp<SystemSpace>;
  paddingBottom?: ResponsiveProp<SystemSpace>;
  paddingRight?: ResponsiveProp<SystemSpace>;
  paddingLeft?: ResponsiveProp<SystemSpace>;
  paddingX?: ResponsiveProp<SystemSpace>;
  paddingY?: ResponsiveProp<SystemSpace>;
  gap?: ResponsiveProp<SystemSpace>;
};
