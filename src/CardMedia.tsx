import { css } from "@emotion/react";
import { Properties } from "csstype";
import { forwardRef, Ref } from "react";

export type CardMediaProps = {
  height?: Properties["height"];
  image?: string;
  title?: string;
  ref?: Ref<HTMLDivElement>;
};

export const CardMedia = forwardRef(
  ({ height, image, title }: CardMediaProps, ref: Ref<HTMLDivElement>) => {
    return (
      <div
        ref={ref}
        title={title}
        css={css`
          display: block;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          background-image: url(${image});
          height: ${height};
        `}
      ></div>
    );
  }
);
