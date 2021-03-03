import { ReactNode } from "react";
import { css, Theme } from "@emotion/react";

export type ButtonGroupProps = {
  attached?: boolean;
  direction?: "horizontal" | "vertical";
  space?: keyof Theme["space"];
  children: ReactNode;
};

export const ButtonGroup = ({
  attached = false,
  direction = "horizontal",
  space,
  children,
}: ButtonGroupProps) => {
  return (
    <div
      role="group"
      css={(theme) => [
        css`
          display: inline-flex;
        `,
        direction === "vertical" &&
          css`
            flex-direction: column;
          `,
        attached &&
          direction === "vertical" &&
          css`
            > *:first-of-type:not(:last-of-type) {
              border-bottom-left-radius: 0;
              border-bottom-right-radius: 0;
            }
            > *:not(:first-of-type):not(:last-of-type) {
              border-radius: 0;
            }
            > *:not(:last-of-type) {
              border-bottom: none;
            }

            > *:not(:first-of-type):last-of-type {
              border-top-left-radius: 0;
              border-top-right-radius: 0;
            }
          `,
        attached &&
          direction === "horizontal" &&
          css`
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
          `,
        !attached &&
          direction === "horizontal" &&
          css`
            > *:not(style) ~ *:not(style) {
              margin-left: ${space && theme.space[space]};
            }
          `,
        !attached &&
          direction === "vertical" &&
          css`
            > *:not(:last-of-type) {
              margin-bottom: ${space && theme.space[space]};
            }
          `,
      ]}
    >
      {children}
    </div>
  );
};
