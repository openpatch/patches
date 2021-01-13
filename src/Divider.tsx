import { Box, BoxProps } from "./Box";

export type DividerProps = {
  color?: BoxProps["backgroundColor"];
};

export const Divider = ({ color = "neutral.300" }: DividerProps) => {
  return (
    <Box position="relative">
      <Box
        position="absolute"
        width="100%"
        backgroundColor={color}
        height="1px"
      ></Box>
    </Box>
  );
};
