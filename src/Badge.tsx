/** @jsx jsx */
import { ReactNode } from "react";
import { jsx, css } from "@emotion/core";
import { Theme } from "./themes";

export type BadgeProps = {
  children?: ReactNode;
  color?: keyof Theme["colors"];
  icon?: ReactNode;
};

const colorStyle = (color: keyof Theme["colors"]) => (theme: Theme) => {
  const { fg, bg } = theme.styles.pairs[color];

  return css`
    background-color: ${theme.colors[color][bg]};
    color: ${theme.colors[color][fg]};
    border-color: ${theme.colors[color][fg]};
  `;
};

export const Badge = ({ icon, color = "primary", children }: BadgeProps) => {
  return (
    <div
      css={(theme: Theme) => [
        css`
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: ${theme.fontSizes[12]};
          font-weight: ${theme.fontWeights.semibold};
          padding-left: ${theme.spacing[8]};
          padding-right: ${theme.spacing[8]};
          padding-bottom: ${theme.spacing[4]};
          padding-top: ${theme.spacing[4]};
          border-radius: ${theme.borderRadius.full};
          border-style: solid;
          border-width: ${theme.borderWidths.default};

          span {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 12px;
            margin-right: ${theme.spacing[4]};
          }
        `,
        colorStyle(color)(theme),
      ]}
    >
      {icon && <span>{icon}</span>}
      {children}
    </div>
  );
};
