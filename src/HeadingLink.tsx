import { css } from "@emotion/react";
import { forwardRef, ReactNode } from "react";
import { Heading, HeadingProps } from "./Heading";
import { useLinkComponent } from "./hooks/useLinkComponent";
import { Icon } from "./Icon";
import { ExternalWindow } from "./icons/shade";
import { LinkComponentProps } from "./LinkComponentProvider";
import { TextProps } from "./Text";

export type HeadingLinkProps = {
  children?: ReactNode;
  as?: HeadingProps["as"];
} & LinkComponentProps &
  TextProps;

export const HeadingLink = forwardRef<HTMLAnchorElement, HeadingLinkProps>(
  ({ children, href, color, as, ...props }, ref) => {
    const LinkComponent = useLinkComponent(ref);
    const external = href[0] !== "/" && href[0] !== "#";
    return (
      <Heading as={as} {...props}>
        <LinkComponent
          css={(theme) => css`
            display: inline;
            color: inherit;
            text-decoration: none;
            svg {
              margin-left: ${theme.space.xxsmall};
              width: auto;
              height: 70%;
            }

            &:hover {
              color: ${theme.colors.primary[800]};
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
      </Heading>
    );
  }
);
