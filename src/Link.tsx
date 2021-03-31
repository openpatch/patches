import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { forwardRef, HTMLAttributes, ReactNode } from "react";
import { Icon } from "./Icon";
import { ExternalWindow } from "./icons/shade";
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  cursor,
  CursorProps,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "./system";

export type StyledLinkProps = ColorProps &
  CursorProps &
  SpaceProps &
  TypographyProps &
  LayoutProps &
  FlexboxProps &
  GridProps &
  BackgroundProps &
  BorderProps &
  PositionProps &
  ShadowProps &
  HTMLAttributes<HTMLAnchorElement>;

const StyledLink = styled.a<StyledLinkProps>(
  css`
    box-sizing: border-box;
    min-width: 0;
    transition: all 0.2s ease;
    padding: 0;
    margin: 0;
  `,
  compose(
    color,
    cursor,
    space,
    typography,
    layout,
    flexbox,
    grid,
    background,
    border,
    position,
    shadow
  )
);

export type LinkProps = {
  children?: ReactNode;
  external?: boolean;
  href?: string;
  color?: keyof Theme["colors"];
} & StyledLinkProps;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, color, children, external, ...props }, ref) => {
    return (
      <StyledLink
        {...props}
        ref={ref}
        href={href}
        css={(theme) => [
          css`
            display: inline-flex;
            align-items: center;
            color: inherit;
            svg {
              margin-left: ${theme.space.xsmall};
              width: auto;
              height: 90%;
            }
          `,
        ]}
      >
        {children}
        {external && (
          <Icon size="auto" color={color}>
            <ExternalWindow />
          </Icon>
        )}
      </StyledLink>
    );
  }
);
