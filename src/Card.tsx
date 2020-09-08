/** @jsx jsx */
import { ReactNode } from "react";
import { jsx, css } from "@emotion/core";
import { Theme } from "./themes";

export type CardProps = {
  boxShadow?: keyof Theme["boxShadows"];
  borderRadius?: keyof Theme["borderRadius"];
  children?: ReactNode;
};

export type CardContentProps = {
  children?: ReactNode;
};

export const CardContent = ({ children }: CardContentProps) => (
  <div
    css={(theme) => css`
      padding: ${theme.spacing[16]};
    `}
  >
    {children}
  </div>
);

export const Card = ({
  boxShadow = "default",
  borderRadius = "default",
  children,
}: CardProps) => {
  return (
    <div
      css={(theme: Theme) => css`
        box-shadow: ${theme.boxShadows[boxShadow]};
        border-radius: ${theme.borderRadius[borderRadius]};
        background-color: ${theme.baseColors.card};
      `}
    >
      {children}
    </div>
  );
};
