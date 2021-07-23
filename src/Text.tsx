import { css } from "@emotion/react";
import { Properties } from "csstype";
import { ReactNode } from "react";
import { Box } from "./Box";
import { useBreakpoints } from "./hooks";
import { ColorProps, SpaceProps, TypographyProps } from "./system";
import { ResponsiveProp, SystemElements } from "./system/types";

export type TextProps = {
  id?: string;
  htmlFor?: string;
  as?: SystemElements;
  truncate?: Properties["width"];
  lineClamp?: ResponsiveProp<number>;
  children?: ReactNode;
  href?: string;
  className?: string;
  role?: string;
  title?: string;
} & TypographyProps &
  SpaceProps &
  Pick<ColorProps, "textColor">;

export const Text = ({
  truncate,
  lineClamp,
  as = "p",
  ...props
}: TextProps) => {
  const responsiveLineClamp = useBreakpoints(lineClamp);
  return (
    <Box
      p="none"
      m="none"
      display={as == "span" ? "inline" : undefined}
      as={as}
      css={[
        lineClamp &&
          css`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${responsiveLineClamp};
            overflow: hidden;
          `,
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
