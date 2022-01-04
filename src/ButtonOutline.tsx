import { ButtonHTMLAttributes, ReactNode, Ref } from "react";
import { Button, ButtonProps } from "./Button";
import { variant, styled } from "./system";
import { SystemColor, SystemColorNames } from "./system/types";

export type ButtonOutlineProps = {
  children: ReactNode;
  tone?: SystemColorNames;
  ref?: Ref<HTMLButtonElement>;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  Pick<
    ButtonProps,
    | "iconLeft"
    | "iconRight"
    | "size"
    | "disabled"
    | "type"
    | "fullWidth"
    | "loading"
  >;

const StyledButtonOutline: React.FunctionComponent<ButtonOutlineProps> = styled(
  Button
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
