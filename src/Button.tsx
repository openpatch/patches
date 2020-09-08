/** @jsx jsx */
import { ReactNode } from "react";
import { jsx, css } from "@emotion/core";
import { shade, transparentize, readableColor } from "polished";

import { Theme, ThemeColor } from "./themes";

export type ButtonProps = {
  children: string;
  fullWidth?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
  color?: keyof Theme["colors"];
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  boxShadow?: keyof Theme["boxShadows"];
  variant?: "primary" | "inverted" | "secondary" | "tertiary";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

const sizeStyle = (size: ButtonProps["size"]) => (theme: Theme) => {
  if (size === "sm") {
    return css`
      font-size: ${theme.fontSizes["14"]};
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 8px;
      padding-bottom: 8px;

      span {
        width: ${theme.fontSizes["14"]};
      }

      span.icon-left {
        margin-right: 8px;
      }

      span.icon-right {
        margin-left: 8px;
      }
    `;
  } else if (size === "md") {
    return css`
      font-size: ${theme.fontSizes["16"]};
      padding-left: 16px;
      padding-right: 16px;
      padding-top: 12px;
      padding-bottom: 12px;

      span {
        width: ${theme.fontSizes[20]};
      }

      span.icon-left {
        margin-right: 12px;
      }

      span.icon-right {
        margin-left: 12px;
      }
    `;
  } else if (size === "lg") {
    return css`
      font-size: ${theme.fontSizes["20"]};
      padding-left: 30px;
      padding-right: 30px;
      padding-top: 15px;
      padding-bottom: 15px;

      span {
        width: ${theme.fontSizes[32]};
      }

      span.icon-left {
        margin-right: 15px;
      }

      span.icon-right {
        margin-left: 15px;
      }
    `;
  }
  return css`
    font-size: ${theme.fontSizes[12]};
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 6px;
    padding-bottom: 6px;

    span {
      width: ${theme.fontSizes[12]};
    }

    span.icon-left {
      margin-right: 6px;
    }

    span.icon-right {
      margin-left: 6px;
    }
  `;
};

const variantStyle = (variant: ButtonProps["variant"]) => (
  color: keyof Theme["colors"]
) => (theme: Theme) => {
  const colorPalette: ThemeColor = theme.colors[color] as ThemeColor;
  const { fg, bg } = theme.styles.pairs[color];

  if (variant === "inverted") {
    const color = readableColor(
      colorPalette[bg],
      colorPalette[fg],
      colorPalette[900],
      true
    );
    return css`
      background-color: ${colorPalette[bg]};
      color: ${color};

      &:disabled {
        cursor: ${theme.cursor["not-allowed"]};
        background-color: ${transparentize(0.2, colorPalette[bg])};
        color: ${transparentize(0.2, color)};
      }

      &:hover:enabled {
        background-color: ${transparentize(0.2, colorPalette[bg])};
      }

      &:active:enabled {
        background-color: ${shade(0.1, colorPalette[bg])};
      }
    `;
  } else if (variant === "secondary") {
    return css`
      background-color: ${theme.baseColors["transparent"]};
      border-color: ${theme.colors.neutral[100]};
      border-width: ${theme.borderWidths[2]};
      border-style: solid;
      color: ${colorPalette[fg]};

      &:disabled {
        cursor: ${theme.cursor["not-allowed"]};
        color: ${transparentize(0.2, colorPalette[fg])};
      }

      &:hover:enabled {
        color: ${transparentize(0.2, colorPalette[fg])};
      }

      &:active:enabled {
        color: ${shade(0.2, colorPalette[fg])};
      }
    `;
  } else if (variant === "tertiary") {
    return css`
      background-color: ${theme.baseColors["transparent"]};
      color: ${colorPalette[fg]};

      &:disabled {
        cursor: ${theme.cursor["not-allowed"]};
        color: ${transparentize(0.2, colorPalette[fg])};
      }

      &:hover:enabled {
        color: ${transparentize(0.2, colorPalette[fg])};
      }

      &:active:enabled {
        color: ${shade(0.2, colorPalette[fg])};
      }
    `;
  }
  return css`
    background-color: ${colorPalette[fg]};
    color: ${readableColor(
      colorPalette[fg],
      colorPalette[bg],
      colorPalette[900],
      true
    )};

    &:disabled {
      background-color: ${transparentize(0.4, colorPalette[fg])};
      cursor: ${theme.cursor["not-allowed"]};
    }

    &:hover:enabled {
      background-color: ${transparentize(0.2, colorPalette[fg])};
    }

    &:active:enabled {
      background-color: ${shade(0.2, colorPalette[fg])};
    }
  `;
};

const baseStyle = (theme: Theme) => css`
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: ${theme.cursor.pointer};
  border-radius: ${theme.borderRadius["default"]};
  font-weight: ${theme.fontWeights["bold"]};
  transition: all 0.1s ease-out;
  &:focus {
    outline: none;
    box-shadow: ${theme.boxShadows["outline"]};
  }

  span {
    display: inline-flex;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;

const fullWidthStyle = {
  width: "100%",
};

const boxShadowStyle = (boxShadow: keyof Theme["boxShadows"]) => (
  theme: Theme
) => {
  return css`
    box-shadow: ${theme.boxShadows[boxShadow]};
  `;
};

export const Button = ({
  children,
  size = "sm",
  variant = "primary",
  color = "primary",
  boxShadow = "none",
  fullWidth = false,
  disabled = false,
  type = "submit",
  iconLeft,
  iconRight,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={type}
      css={(theme) => [
        baseStyle(theme),
        boxShadowStyle(boxShadow)(theme),
        fullWidth && fullWidthStyle,
        sizeStyle(size)(theme),
        variantStyle(variant)(color)(theme),
      ]}
    >
      {iconLeft && <span className="icon-left">{iconLeft}</span>}
      {children}
      {iconRight && <span className="icon-right">{iconRight}</span>}
    </button>
  );
};
