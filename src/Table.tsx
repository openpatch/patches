/** @jsx jsx */
import { ReactNode } from "react";
import { jsx, css } from "@emotion/core";
import { Box } from "./Box";
import { Theme } from "./themes/types";

export type TableProps = {
  children?: ReactNode;
};

export const Table = ({ children }: TableProps) => {
  return (
    <Box
      as="table"
      minWidth="100%"
      css={(theme: Theme) => css`
        border-collapse: collapse;
        border-width: 1px;
        border-color: ${theme.colors.neutral["100"]};
        border-style: solid;
      `}
    >
      {children}
    </Box>
  );
};
