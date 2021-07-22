import { css } from "@emotion/react";
import { forwardRef, ReactNode } from "react";
import { useLinkComponent } from "./hooks";
import { Icon } from "./Icon";
import { ExternalWindow } from "./icons/shade";
import { LinkComponentProps } from "./LinkComponentProvider";

export type TextLinkProps = {
  children?: ReactNode;
} & LinkComponentProps;

export const TextLink = forwardRef<HTMLAnchorElement, TextLinkProps>(
  ({ children, href, color, ...props }, ref) => {
    const LinkComponent = useLinkComponent(ref);
    const external = href[0] !== "/" && href[0] !== "#";
    return (
      <LinkComponent
        css={(theme) => css`
          display: inline;
          color: inherit;
          svg {
            margin-left: ${theme.space.xxsmall};
            width: auto;
            height: 90%;
          }
        `}
        href={href}
        ref={ref}
        {...props}
      >
        {children}
        {external && (
          <Icon size="auto" color="currentColor">
            <ExternalWindow />
          </Icon>
        )}
      </LinkComponent>
    );
  }
);
