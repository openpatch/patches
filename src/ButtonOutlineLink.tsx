import { css } from "@emotion/react";
import { forwardRef, ReactNode } from "react";
import { ButtonOutline, ButtonOutlineProps } from "./ButtonOutline";
import { useLinkComponent } from "./hooks";
import { LinkComponentProps } from "./LinkComponentProvider";

export type ButtonOutlineLinkProps = {
  children?: ReactNode;
} & LinkComponentProps &
  Omit<ButtonOutlineProps, "ref">;

export const ButtonOutlineLink = forwardRef<
  HTMLAnchorElement,
  ButtonOutlineLinkProps
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
      <ButtonOutline
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
      </ButtonOutline>
    );
  }
);
