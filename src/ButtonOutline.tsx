import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";
import { ButtonBase, ButtonBaseProps } from "./ButtonBase";
import { variant } from "./system";
import { SystemColor, SystemColorNames } from "./system/types";

export type ButtonOutlineProps = {
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

const StyledButtonOutline: React.FunctionComponent<ButtonOutlineProps> = styled(
  ButtonBase
)<ButtonOutlineProps>(
  ({ theme }) => {
    return {
      borderStyle: "solid",
      borderColor: theme.colors.neutral["200"],
      backgroundColor: "none",
    };
  },
  variant<
    {
      color: SystemColor;
    },
    SystemColorNames,
    string
  >({
    scale: "buttonsOutline",
    prop: "tone",
    variants: {
      primary: {
        color: "primary.800",
      },
      accent: {
        color: "accent.800",
      },
      neutral: {
        color: "neutral.800",
      },
      success: {
        color: "success.800",
      },
      warning: {
        color: "warning.800",
      },
      error: {
        color: "error.800",
      },
      info: {
        color: "info.800",
      },
    },
  })
);

export const ButtonOutline = StyledButtonOutline;
ButtonOutline.defaultProps = {
  tone: "primary",
};
