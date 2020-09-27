/** @jsx jsx */
import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonBase, ButtonBaseProps } from "./ButtonBase";
import styled from "./themes/styled";
import { variant } from "./system";
import { SystemColor, SystemColorNames } from "./system/types";

export type ButtonPrimaryProps = {
  children: string;
  tone?: SystemColorNames;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  Pick<
    ButtonBaseProps,
    | "iconLeft"
    | "iconRight"
    | "size"
    | "disabled"
    | "type"
    | "fullWidth"
    | "loading"
  >;

const StyledButtonPrimary: React.FunctionComponent<ButtonPrimaryProps> = styled(
  ButtonBase
)<ButtonPrimaryProps>(
  {},
  variant<
    {
      color: SystemColor;
      backgroundColor: SystemColor;
    },
    SystemColorNames,
    string
  >({
    scale: "buttonsPrimary",
    prop: "tone",
    variants: {
      primary: {
        backgroundColor: "primary.800",
        color: "primary.50",
      },
      accent: {
        backgroundColor: "accent.800",
        color: "accent.50",
      },
      neutral: {
        backgroundColor: "neutral.800",
        color: "neutral.50",
      },
      success: {
        backgroundColor: "success.800",
        color: "success.50",
      },
      warning: {
        backgroundColor: "warning.800",
        color: "warning.50",
      },
      error: {
        backgroundColor: "error.800",
        color: "error.50",
      },
      info: {
        backgroundColor: "info.800",
        color: "info.50",
      },
    },
  })
);

export const ButtonPrimary = StyledButtonPrimary;
ButtonPrimary.defaultProps = {
  tone: "primary",
};
