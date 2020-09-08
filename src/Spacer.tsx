/** @jsx jsx */
import { jsx, css } from "@emotion/core";

export type SpacerProps = {
  width?: number;
  height?: number;
};

export const Spacer = ({ height, width }: SpacerProps) => {
  return (
    <div
      css={css`
        flex: 1;
        justify-self: stretch;
        align-self: stretch;
        height: ${height}px;
        width: ${width}px;
      `}
    />
  );
};
