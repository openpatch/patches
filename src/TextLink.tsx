import { css } from "@emotion/react";
import { forwardRef, ReactNode, useEffect, useState } from "react";
import { useLinkComponent } from "./hooks";
import { Icon } from "./Icon";
import { ExternalWindow } from "./icons/shade";
import { LinkComponentProps } from "./LinkComponentProvider";

export type TextLinkProps = {
  children?: ReactNode;
} & LinkComponentProps;

// https://stackoverflow.com/a/6238456
function useIsExternal(url: string): boolean {
  const [isExternal, setIsExternal] = useState(false);

  useEffect(() => {
    const match = url.match(
      /^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/
    );
    if (match) {
      if (
        typeof match[1] === "string" &&
        match[1].length > 0 &&
        match[1].toLowerCase() !== location.protocol
      ) {
        setIsExternal(true);
      } else if (
        typeof match[2] === "string" &&
        match[2].length > 0 &&
        match[2].replace(
          new RegExp(
            ":(" + { "http:": 80, "https:": 443 }[location.protocol] + ")?$"
          ),
          ""
        ) !== location.host
      ) {
        setIsExternal(true);
      }
    } else {
      setIsExternal(false);
    }
  }, [url]);

  return isExternal;
}

export const TextLink = forwardRef<HTMLAnchorElement, TextLinkProps>(
  ({ children, href, color, ...props }, ref) => {
    const LinkComponent = useLinkComponent(ref);
    const isExternal = useIsExternal(href);
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
        {isExternal && (
          <Icon size="auto" color="currentColor">
            <ExternalWindow />
          </Icon>
        )}
      </LinkComponent>
    );
  }
);
