import { css, Theme } from "@emotion/react";
import { ReactNode } from "react";
import { Icon } from "./Icon";
import { ExternalWindow } from "./icons/shade";
import { Text, TextProps } from "./Text";

export type LinkProps = {
  children?: ReactNode;
  external?: boolean;
  href?: string;
  color?: keyof Theme["colors"];
} & TextProps;

export const Link = ({
  href,
  color,
  children,
  external,
  as = "a",
  ...props
}: LinkProps) => {
  return (
    <Text
      {...props}
      as={as}
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
    </Text>
  );
};
