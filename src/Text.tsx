import { css } from "@emotion/react";
import { Properties } from "csstype";
import { ReactNode } from "react";
import { Box } from "./Box";
import { ColorProps, SpaceProps, TypographyProps } from "./system";
import { SystemTypographyElements } from "./system/types";

export type TextProps = {
  as?: SystemTypographyElements;
  truncate?: Properties["width"];
  children?: ReactNode;
  href?: string;
  className?: string;
} & TypographyProps &
  SpaceProps &
  Pick<ColorProps, "textColor">;

export const Text = ({ truncate, ...props }: TextProps) => {
  return (
    <Box
      p="none"
      m="none"
      css={[
        truncate &&
          css`
            display: inline-block;
            white-space: nowrap;
            width: ${truncate};
            overflow: hidden;
            text-overflow: ellipsis;
          `,
      ]}
      {...props}
    />
  );
};
