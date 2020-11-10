/** @jsx jsx */
import { ReactNode } from "react";
import { jsx, css } from "@emotion/core";
import { TextProps, Text } from "./Text";
import { ExternalWindow } from "./icons/shade";
import { Icon } from "./Icon";
import { Theme } from "./themes/types";

export type LinkProps = {
  children?: ReactNode;
  external?: boolean;
  href: string;
  color?: keyof Theme["colors"];
} & Omit<TextProps, "as">;

export const Link = ({
  href,
  color,
  children,
  external,
  ...props
}: LinkProps) => {
  return (
    <Text
      {...props}
      as="a"
      href={href}
      css={(theme: Theme) => [
        css`
          display: inline-flex;
          align-items: center;
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
    </Text>
  );
};