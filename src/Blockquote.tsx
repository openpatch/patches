/** @jsx jsx */
import { ReactNode, forwardRef, Ref } from "react";
import { jsx, css } from "@emotion/react";
import { TextProps } from "./Text";
import { Box } from "./Box";

export type BlockquoteProps = {
  children?: ReactNode;
} & Omit<TextProps, "as">;

const Icon = () => {
  return (
    <Box
      position="absolute"
      css={css`
        margin-left: -0.5rem;
        margin-top: -0.5rem;
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 30 30"
        css={(theme) => css`
          fill: ${theme.colors.neutral[100]};
          width: 2rem;
          height: 2rem;
        `}
      >
        <path d="M15.264 19.552c0 3.648 2.4 5.568 5.088 5.568 2.976 0 5.76-2.496 5.76-5.664 0-2.592-1.824-4.32-4.032-4.32h-.768c1.056-3.072 4.512-6.336 8.064-8.064L26.4 4c-5.952 2.976-11.136 9.504-11.136 15.552zM0 19.552C0 23.2 2.304 25.12 5.088 25.12c2.976 0 5.76-2.496 5.76-5.664 0-2.592-1.92-4.32-4.128-4.32h-.768c1.056-3.072 4.608-6.336 8.064-8.064L11.136 4C5.184 6.976 0 13.504 0 19.552z"></path>
      </svg>
    </Box>
  );
};

export default Icon;

export const Blockquote = ({ children, ...props }: BlockquoteProps) => {
  return (
    <Box as="blockquote" fontStyle="italic">
      <Icon />
      <Box position="relative">
        <p>{children}</p>
      </Box>
    </Box>
  );
};
