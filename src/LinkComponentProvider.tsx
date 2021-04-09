import querystring from "querystring";
import {
  AnchorHTMLAttributes,
  ComponentType,
  createContext,
  forwardRef,
  ForwardRefRenderFunction,
  ReactNode,
} from "react";
import { UrlObject } from "url";

export interface LinkComponentProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: Pick<UrlObject, "pathname" | "query" | "hash"> | string;
}

export const makeLinkComponent = (
  render: ForwardRefRenderFunction<HTMLAnchorElement, LinkComponentProps>
) => ({ __forwardRef__: forwardRef(render) } as const);

export type LinkComponent =
  | ReturnType<typeof makeLinkComponent>
  | ComponentType<LinkComponentProps>;

const DefaultLinkComponent = makeLinkComponent(({ href, ...props }, ref) => {
  let stringHref = "";
  if (typeof href === "string") {
    stringHref = href;
  } else {
    // url object is only suitable for relative link.
    const newURL = new URL("", "http://n");
    newURL.pathname = href.pathname || "";
    let search: string = "";
    if (href.query && typeof href.query !== "string") {
      search = querystring.encode(href.query);
    } else if (href.query) {
      search = href.query;
    }
    newURL.search = search;
    newURL.hash = href.hash || "";

    // remove fake base path
    stringHref = newURL.href.slice(newURL.origin.length);
  }

  return <a ref={ref} href={stringHref} {...props} />;
});

export type LinkComponentProviderProps = {
  children?: ReactNode;
  linkComponent: LinkComponent;
};

export const LinkComponentContext = createContext<LinkComponent>(
  DefaultLinkComponent
);

export const LinkComponentProvider = ({
  children,
  linkComponent,
}: LinkComponentProviderProps) => {
  return (
    <LinkComponentContext.Provider value={linkComponent}>
      {children}
    </LinkComponentContext.Provider>
  );
};
