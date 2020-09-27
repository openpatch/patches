/** @jsx jsx */
import { ReactNode } from "react";
import { jsx, css } from "@emotion/core";
import { Theme } from "./themes/types";
import { SystemColor, SystemColorNames } from "./system/types";
import styled from "./themes/styled";
import { variant } from "./system";
import { Box } from "./Box";

export type IconProps = {
  children?: ReactNode;
  color?: keyof Theme["colors"];
  size?: "auto" | "small" | "large";
  badge?: {
    tone: SystemColorNames;
    count: number;
  };
};

const StyledBadge = styled(Box)(
  variant<
    {
      color: SystemColor;
      backgroundColor: SystemColor;
      borderColor: SystemColor;
    },
    SystemColorNames,
    string
  >({
    scale: "badges",
    prop: "tone",
    variants: {
      primary: {
        backgroundColor: "primary.800",
        color: "primary.100",
        borderColor: "primary.100",
      },
      accent: {
        backgroundColor: "accent.800",
        color: "accent.100",
        borderColor: "accent.100",
      },
      neutral: {
        backgroundColor: "neutral.800",
        color: "neutral.100",
        borderColor: "neutral.100",
      },
      success: {
        backgroundColor: "success.800",
        color: "success.100",
        borderColor: "success.100",
      },
      warning: {
        backgroundColor: "warning.800",
        color: "warning.100",
        borderColor: "warning.100",
      },
      error: {
        backgroundColor: "error.800",
        color: "error.100",
        borderColor: "error.100",
      },
      info: {
        backgroundColor: "info.800",
        color: "info.100",
        borderColor: "info.100",
      },
    },
  })
);

const style = (theme: Theme) => (
  color: IconProps["color"] = "primary",
  size: IconProps["size"] = "small"
) => {
  const palette = theme.colors[color];
  let sizeCSS = css``;
  switch (size) {
    case "auto":
      sizeCSS = css`
        height: 1em;

        svg {
          height: 1em;
        }
      `;
      break;
    case "small":
      sizeCSS = css`
        width: 24px;
        height: 24px;

        svg {
          width: 24px;
          height: 24px;
        }
      `;
      break;
    case "large":
      sizeCSS = css`
        width: 48px;
        height: 48px;
        background-color: ${palette?.[100] || palette};

        svg {
          width: 24px;
          height: 24px;
        }
      `;
  }

  return css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${palette?.[600] || palette};

    ${sizeCSS};

    svg .primary {
      fill: ${palette?.[300] || palette};
    }

    svg .secondary {
      fill: ${palette?.[600] || palette};
    }
  `;
};

export const Icon = ({
  children,
  color = "primary",
  size = "small",
  badge,
}: IconProps) => {
  return (
    <span
      css={(theme: Theme) => [
        css`
          position: relative;
          border-radius: ${theme.radii.full};
        `,
        style(theme)(color, size),
      ]}
    >
      {badge && (
        <StyledBadge
          borderRadius="standard"
          fontWeight="semibold"
          css={css`
            position: absolute;
            padding: 2px;
            font-size: 10px;
            width: 23px;
            text-align: center;
            top: -6px;
            right: -6px;
          `}
          tone={badge.tone}
        >
          {badge.count >= 100 ? "99+" : badge.count}
        </StyledBadge>
      )}
      {children}
    </span>
  );
};
