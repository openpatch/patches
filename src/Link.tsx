import { css, Theme } from "@emotion/react";
import { ReactNode } from "react";
import { Icon } from "./Icon";
import { ExternalWindow } from "./icons/shade";
import { Text, TextProps } from "./Text";

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
      css={(theme) => [
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
