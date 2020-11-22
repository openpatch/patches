/** @jsx jsx */
import { ReactNode } from "react";
import { jsx, css } from "@emotion/react";
import { Box, BoxProps } from "./Box";

export type CenterProps = {
  children?: ReactNode;
} & BoxProps;

export const Center = ({ children, ...props }: CenterProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      {...props}
    >
      {children}
    </Box>
  );
};
