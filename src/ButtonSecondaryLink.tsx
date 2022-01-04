import { AnchorHTMLAttributes, ReactNode, Ref } from "react";
import { ButtonLink, ButtonLinkProps } from "./ButtonLink";
import { variant, styled } from "./system";
import { SystemColor, SystemColorNames } from "./system/types";

export type ButtonSecondaryLinkProps = {
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

const StyledButtonSecondaryLink: React.FunctionComponent<ButtonSecondaryLinkProps> = styled(
  ButtonLink
)<ButtonSecondaryLinkProps>(
  {},
  variant<
    {
      color: SystemColor;
      backgroundColor: SystemColor;
    },
    SystemColorNames,
    string
  >({
    scale: "buttonsSecondary",
    prop: "tone",
    variants: {
      primary: {
        color: "primary.800",
        backgroundColor: "primary.50",
      },
      accent: {
        color: "accent.800",
        backgroundColor: "accent.50",
      },
      neutral: {
        color: "neutral.800",
        backgroundColor: "neutral.50",
      },
      success: {
        color: "success.800",
        backgroundColor: "success.50",
      },
      warning: {
        color: "warning.800",
        backgroundColor: "warning.50",
      },
      error: {
        color: "error.800",
        backgroundColor: "error.50",
      },
      info: {
        color: "info.800",
        backgroundColor: "info.50",
      },
    },
  })
);

export const ButtonSecondaryLink = StyledButtonSecondaryLink;
ButtonSecondaryLink.defaultProps = {
  tone: "primary",
};
