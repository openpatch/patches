/** @jsx jsx */
import * as CSS from "csstype";
import { jsx, css } from "@emotion/core";
import { ReactNode } from "react";
import { Box } from "../Box";
import { Theme } from "../themes/types";

export type PlaceholderProps = {
  label?: ReactNode;
  height?: CSS.Properties["height"];
  width?: CSS.Properties["width"];
  shape?: "rectangle" | "circle";
};

export const Placeholder = ({
  label,
  width = "auto",
  height = "120px",
  shape = "rectangle",
}: PlaceholderProps) => {
  return (
    <Box
      position="relative"
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius={shape === "circle" ? "full" : "none"}
      backgroundColor="neutral.100"
      borderStyle="solid"
      borderColor="neutral.200"
      css={css`
        opacity: 0.8;
        width: ${width};
        height: ${height};
      `}
    >
      {label ? (
        <Box px="small" py="xxsmall">
          {label}
        </Box>
      ) : (
        <svg
          css={(theme: Theme) => css`
            position: absolute;
            width: 100%;
            height: 100%;
            stroke: ${theme.colors.neutral[200]};
            stroke-width: 2px;
          `}
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1={0} y1={0} x2="100%" y2="100%" />
          <line x1="100%" y1={0} x2={0} y2="100%" />
        </svg>
      )}
    </Box>
  );
};
