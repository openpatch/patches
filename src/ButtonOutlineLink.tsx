import { AnchorHTMLAttributes, ReactNode, Ref } from "react";
import { ButtonLink, ButtonLinkProps } from "./ButtonLink";
import { variant, styled } from "./system";
import { SystemColor, SystemColorNames } from "./system/types";

export type ButtonOutlineLinkProps = {
  children: ReactNode;
  tone?: SystemColorNames;
  ref?: Ref<HTMLAnchorElement>;
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  Pick<
    ButtonLinkProps,
    | "iconLeft"
    | "iconRight"
    | "size"
    | "disabled"
    | "type"
    | "fullWidth"
    | "loading"
  >;

const StyledButtonOutlineLink: React.FunctionComponent<ButtonOutlineLinkProps> = styled(
  ButtonLink
)<ButtonOutlineLinkProps>(
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

export const ButtonOutlineLink = StyledButtonOutlineLink;
ButtonOutlineLink.defaultProps = {
  tone: "primary",
};
