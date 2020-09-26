/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Box, BoxProps } from "./Box";
import { Theme, ThemeColor } from "./themes/types";

export type DividerProps = {
  color?: BoxProps["backgroundColor"];
};

export const Divider = ({ color = "neutral.300" }: DividerProps) => {
  return (
    <Box position="relative">
      <Box
        position="absolute"
        width="100%"
        background={color}
        height="1px"
      ></Box>
    </Box>
  );
};
