import { css } from "@emotion/react";
import { forwardRef, ReactNode } from "react";
import { ButtonSecondary, ButtonSecondaryProps } from "./ButtonSecondary";
import { useLinkComponent } from "./hooks";
import { LinkComponentProps } from "./LinkComponentProvider";

export type ButtonSecondaryLinkProps = {
  children?: ReactNode;
} & LinkComponentProps &
  Omit<ButtonSecondaryProps, "ref">;

export const ButtonSecondaryLink = forwardRef<
  HTMLAnchorElement,
  ButtonSecondaryLinkProps
>(
  (
    {
      children,
      tone,
      iconLeft,
      iconRight,
      size,
      disabled,
      type,
      fullWidth,
      loading,
      ...props
    },
    ref
  ) => {
    const LinkComponent = useLinkComponent(ref);
    return (
      <ButtonSecondary
        tone={tone}
        iconLeft={iconLeft}
        iconRight={iconRight}
        size={size}
        disabled={disabled}
        type={type}
        fullWidth={fullWidth}
        loading={loading}
      >
        <LinkComponent
          css={css`
            &,
            &:visited,
            &:hover,
            &:active {
              font-style: inherit;
              color: inherit;
              background-color: transparent;
              font-size: inherit;
              text-decoration: none;
              font-variant: inherit;
              font-weight: inherit;
              line-height: inherit;
              font-family: inherit;
            }
          `}
          ref={ref}
          {...props}
        >
          {children}
        </LinkComponent>
      </ButtonSecondary>
    );
  }
);
