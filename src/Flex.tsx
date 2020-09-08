/** @jsx jsx */
import { ReactNode } from "react";
import { jsx, css } from "@emotion/core";
import * as CSS from "csstype";

export type FlexProps = {
  align?: CSS.Properties["alignItems"];
  justify?: CSS.Properties["justifyContent"];
  wrap?: CSS.Properties["flexWrap"];
  direction?: CSS.Properties["flexDirection"];
  basis?: CSS.Properties["flexBasis"];
  grow?: CSS.Properties["flexGrow"];
  shrink?: CSS.Properties["flexShrink"];
  children?: ReactNode;
};

export const Flex = ({
  align,
  justify,
  wrap,
  direction,
  basis,
  grow,
  shrink,
  children,
}: FlexProps) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: ${align};
        justify-content: ${justify};
        flex-wrap: ${wrap};
        flex-direction: ${direction};
        flex-basis: ${basis};
        flex-grow: ${grow};
        flex-shrink: ${shrink};
      `}
    >
      {children}
    </div>
  );
};
