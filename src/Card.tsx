/** @jsx jsx */
import { ReactNode, Ref } from "react";
import { jsx, css } from "@emotion/core";
import { Box, BoxProps } from "./Box";

export type CardProps = {
  boxShadow?: BoxProps["boxShadow"];
  borderRadius?: BoxProps["borderRadius"];
  children?: ReactNode;
};

export const Card = ({
  boxShadow = "standard",
  borderRadius = "standard",
  children,
}: CardProps) => {
  return (
    <Box
      boxShadow={boxShadow}
      borderRadius={borderRadius}
      overflow="hidden"
      backgroundColor="card"
    >
      {children}
    </Box>
  );
};
