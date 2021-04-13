import { css, Theme } from "@emotion/react";
import { AnchorHTMLAttributes, forwardRef, ReactNode } from "react";
import { Box } from "./Box";
import { useBreakpoints } from "./hooks/useBreakpoints";
import { useLinkComponent } from "./hooks/useLinkComponent";
import { LoadingDots } from "./LoadingDots";
import {
  color,
  ColorProps,
  shadow,
  ShadowProps,
  typography,
  TypographyProps,
} from "./system";
import { ResponsiveProp } from "./system/types";

export type ButtonLinkProps = {
  children: ReactNode;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  loading?: boolean;
  size?: ResponsiveProp<"xsmall" | "small" | "medium" | "large">;
} & ColorProps &
  TypographyProps &
  ShadowProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;

const sizeStyle = (theme: Theme) => (size: ButtonLinkProps["size"]) => {
  if (size === "small") {
    return css`
      font-size: ${theme.fontSizes.small};
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 8px;
      padding-bottom: 8px;

      span.icon-left,
      span.icon-right {
        width: ${theme.fontSizes.small};
      }

      span.icon-left {
        margin-right: 8px;
      }

      span.icon-right {
        margin-left: 8px;
      }
    `;
  } else if (size === "medium") {
    return css`
      font-size: ${theme.fontSizes.standard};
      padding-left: 16px;
      padding-right: 16px;
      padding-top: 12px;
      padding-bottom: 12px;

      span.icon-left,
      span.icon-right {
        width: ${theme.fontSizes.large};
      }

      span.icon-left {
        margin-right: 12px;
      }

      span.icon-right {
        margin-left: 12px;
      }
    `;
  } else if (size === "large") {
    return css`
      font-size: ${theme.fontSizes.large};
      padding-left: 30px;
      padding-right: 30px;
      padding-top: 15px;
      padding-bottom: 15px;

      span.icon-left,
      span.icon-right {
        width: ${theme.fontSizes.xlarge};
      }

      span.icon-left {
        margin-right: 15px;
      }

      span.icon-right {
        margin-left: 15px;
      }
    `;
  } else if (size === "xsmall") {
    return css`
      font-size: ${theme.fontSizes.xsmall};
      padding-left: 8px;
      padding-right: 8px;
      padding-top: 6px;
      padding-bottom: 6px;

      span.icon-left,
      span.icon-right {
        width: ${theme.fontSizes.xsmall};
      }

      span.icon-left {
        margin-right: 6px;
      }

      span.icon-right {
        margin-left: 6px;
      }
    `;
  }

  return css``;
};

const fullWidthStyle = {
  width: "100%",
};

const baseStyle = (theme: Theme) => css`
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: ${theme.cursor.pointer};
  border-radius: ${theme.radii.standard};
  font-weight: ${theme.fontWeights.semibold};
  transition: all 0.1s ease-out;
  &:focus {
    outline: none;
    box-shadow: ${theme.shadows.outline};
  }

  span.icon-left,
  span.icon-right {
    display: inline-flex;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    {
      children,
      iconLeft,
      iconRight,
      href = "#",
      textColor,
      disabled,
      fullWidth = false,
      loading = false,
      size = ["small"],
      ...props
    },
    ref
  ) => {
    const LinkComponent = useLinkComponent(ref);

    if (!Array.isArray(size)) {
      size = [size];
    }

    const responsiveSize = useBreakpoints(size);

    return (
      <LinkComponent
        ref={ref}
        href={href}
        css={(theme) => [
          color,
          typography,
          shadow,
          disabled &&
            css`
              cursor: not-allowed;
              opacity: 0.4;
            `,
          css`
            line-height: 1.15;
            text-decoration: none;
            position: relative;
            &:hover:enabled {
              opacity: 0.8;
            }
            &:active:enabled {
              filter: brightness(80%);
            }
          `,
          baseStyle(theme),
          sizeStyle(theme)(responsiveSize),
          fullWidth && fullWidthStyle,
        ]}
        {...props}
      >
        {loading && (
          <Box
            position="absolute"
            display="flex"
            top="0px"
            left="0px"
            right="0px"
            bottom="0px"
            justifyContent="center"
            alignItems="center"
          >
            <LoadingDots
              textColor={textColor}
              size={responsiveSize === "large" ? "large" : "medium"}
            />
          </Box>
        )}
        <Box
          css={(theme) => [
            baseStyle(theme),
            loading &&
              css`
                visibility: hidden;
              `,
          ]}
        >
          {iconLeft && <span className="icon-left">{iconLeft}</span>}
          {children}
          {iconRight && <span className="icon-right">{iconRight}</span>}
        </Box>
      </LinkComponent>
    );
  }
);
