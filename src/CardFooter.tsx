/** @jsx jsx */
import { ReactNode, forwardRef, Ref } from "react";
import { jsx, css } from "@emotion/core";
import { Theme } from "./themes/types";
import { Box } from "./Box";

export type CardFooterProps = {
  noSpacing?: boolean;
  children?: ReactNode;
  align?: "left" | "center" | "right";
};

export const CardFooter = ({
  children,
  noSpacing,
  align = "right",
}: CardFooterProps) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      backgroundColor="neutral.50"
      p="standard"
      css={(theme: Theme) => [
        css`
          justify-content: ${align === "right" && `flex-end`};
          justify-content: ${align === "left" && `flex-start`};
          justify-content: ${align === "center" && `center`};
        `,
        !noSpacing &&
          css`
            & > :not(:first-of-type) {
              margin-left: ${theme.space["standard"]};
            }
          `,
      ]}
    >
      {children}
    </Box>
  );
};
