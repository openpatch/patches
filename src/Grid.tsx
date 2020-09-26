/** @jsx jsx */
import { ReactNode } from "react";
import { jsx, css } from "@emotion/core";
import { Box } from "./Box";
import { GridProps as SystemGridProps } from "./system";

export type GridProps = {
  children?: ReactNode;
} & SystemGridProps;

export const Grid = ({ children, ...props }: GridProps) => {
  return (
    <Box display="grid" {...props}>
      {children}
    </Box>
  );
};
