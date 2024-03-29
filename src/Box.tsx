import { HTMLAttributes, Ref } from "react";
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
  styled
} from "./system";
import { SystemElements } from "./system/types";

export type BoxProps = {
  as?: SystemElements;
  id?: string;
  role?: string;
  href?: string;
  className?: string;
  tabIndex?: number;
  ref?: Ref<HTMLDivElement>;
} & ColorProps &
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
  HTMLAttributes<HTMLDivElement>;

/**
 * ‘Box’ is the most low-level layout component provided by Braid. Its job is to render an individual element on the screen.
 * In terms of page layout, ‘Box’ most notably provides a set of padding options which can be used to create container elements with internal spacing.
 *
 * p
 * pX
 * pY
 * pt
 * pb
 * pl
 * pr
 *
 * These options accept a value from our space scale.
 *
 * The Box implements all styled-system apis. (see https://styled-system.com/api)
 *
 */
export const Box = styled.div<BoxProps>(
  {
    boxSizing: "border-box",
    minWidth: 0,
    transition: "all 0.2s ease",
  },
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
