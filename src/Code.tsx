/** @jsx jsx */
import { ReactNode } from "react";
import { jsx, css } from "@emotion/core";
import { TextProps, Text } from "./Text";
import { readableColor } from "polished";
import { Box } from "./Box";

export type CodeProps = {
  children?: ReactNode;
  inline?: boolean;
} & Omit<TextProps, "as" | "href">;

export const Code = ({ children, inline, ...props }: CodeProps) => {
  return (
    <Box
      {...props}
      as="code"
      borderRadius="standard"
      boxShadow="inner"
      fontFamily="monospace"
      p="small"
      css={[
        css`
          word-wrap: break-word;
        `,
        !inline &&
          css`
            display: block;
            white-space: pre-wrap;
          `,
      ]}
    >
      {children}
    </Box>
  );
};
