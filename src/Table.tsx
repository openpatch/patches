import { css } from "@emotion/react";
import { ReactNode } from "react";
import { Box } from "./Box";

export type TableProps = {
  children?: ReactNode;
};

export const Table = ({ children }: TableProps) => {
  return (
    <Box
      as="table"
      minWidth="100%"
      css={(theme) => css`
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
