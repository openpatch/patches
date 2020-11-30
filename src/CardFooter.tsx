import { css } from "@emotion/react";
import { ReactNode } from "react";
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
      css={(theme) => [
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
