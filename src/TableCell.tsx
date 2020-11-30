import { css } from "@emotion/react";
import { ReactNode } from "react";
import { Box, BoxProps } from "./Box";

export type TableCellProps = {
  children?: ReactNode;
  isHeader?: boolean;
  align?: BoxProps["textAlign"];
};

export const TableCell = ({
  children,
  isHeader = false,
  align = "left",
}: TableCellProps) => {
  return (
    <Box
      as={isHeader ? "th" : "td"}
      px="small"
      py="xsmall"
      textAlign={align}
      css={(theme) => [
        isHeader &&
          css`
            font-size: ${theme.fontSizes.small};
            text-transform: uppercase;
            font-weight: ${theme.fontWeights.semibold};
            color: ${theme.colors.neutral["500"]};
            background-color: ${theme.colors.neutral["50"]};
          `,
        !isHeader && css``,
      ]}
    >
      {children}
    </Box>
  );
};
