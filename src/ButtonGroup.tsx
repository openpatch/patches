/** @jsx jsx */
import { ReactNode } from "react";
import { jsx, css } from "@emotion/core";
import { Theme } from "./themes";

export type ButtonGroupProps = {
  attached?: boolean;
  spacing?: keyof Theme["spacing"];
  children: ReactNode;
};

export const ButtonGroup = ({
  attached = false,
  spacing,
  children,
}: ButtonGroupProps) => {
  return (
    <div
      role="group"
      css={(theme) => [
        css`
          display: inline-flex;
        `,
        attached
          ? css`
              > *:first-of-type:not(:last-of-type) {
                border-bottom-right-radius: 0;
                border-top-right-radius: 0;
              }
              > *:not(:first-of-type):not(:last-of-type) {
                border-radius: 0;
              }
              > *:not(:last-of-type) {
                border-right: none;
              }

              > *:not(:first-of-type):last-of-type {
                border-bottom-left-radius: 0;
                border-top-left-radius: 0;
              }
            `
          : css`
              > *:not(style) ~ *:not(style) {
                margin-left: ${spacing && theme.spacing[spacing]};
              }
            `,
      ]}
    >
      {children}
    </div>
  );
};
