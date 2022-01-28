import { css } from "@emotion/react";
import { forwardRef, ReactNode } from "react";
import { useLinkComponent } from "./hooks";
import { Icon } from "./Icon";
import { ExternalWindow } from "./icons/shade";
import { LinkComponentProps } from "./LinkComponentProvider";

export type TextLinkProps = {
  children?: ReactNode;
} & LinkComponentProps;


// https://stackoverflow.com/a/6238456
function isExternal(url: string): boolean {
  var match = url.match(
    /^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/
  );
  if (match) {
    if (
      typeof match[1] === "string" &&
      match[1].length > 0 &&
      match[1].toLowerCase() !== location.protocol
    )
      return true;
    if (
      typeof match[2] === "string" &&
      match[2].length > 0 &&
      match[2].replace(
        new RegExp(
          ":(" + { "http:": 80, "https:": 443 }[location.protocol] + ")?$"
        ),
        ""
      ) !== location.host
    )
      return true;
  }
  return false;
}

export const TextLink = forwardRef<HTMLAnchorElement, TextLinkProps>(
  ({ children, href, color, ...props }, ref) => {
    const LinkComponent = useLinkComponent(ref);
    return (
      <LinkComponent
        css={(theme) => css`
          display: inline;
          color: inherit;
          svg {
            margin-left: ${theme.space.xxsmall};
            width: auto;
            height: 70%;
          }
        `}
        href={href}
        ref={ref}
        {...props}
      >
        {children}
        {isExternal(href) && (
          <Icon size="auto" color="currentColor">
            <ExternalWindow />
          </Icon>
        )}
      </LinkComponent>
    );
  }
);
