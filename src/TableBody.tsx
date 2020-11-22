/** @jsx jsx */
import { ReactNode } from "react";
import { jsx, css } from "@emotion/react";
import { Box } from "./Box";

export type TableBodyProps = {
  children?: ReactNode;
};

export const TableBody = ({ children }: TableBodyProps) => {
  return (
    <Box
      as="tbody"
      css={(theme) => css`
        & > tr {
          border-top-width: 1px;
          border-top-color: ${theme.colors.neutral["100"]};
          border-top-style: solid;
        }
      `}
    >
      {children}
    </Box>
  );
};
