import {
  AnchorHTMLAttributes,
  ComponentType,
  createContext,
  forwardRef,
  ForwardRefRenderFunction,
  ReactNode,
} from "react";

export interface LinkComponentProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const makeLinkComponent = (
  render: ForwardRefRenderFunction<HTMLAnchorElement, LinkComponentProps>
) => ({ __forwardRef__: forwardRef(render) } as const);

export type LinkComponent =
  | ReturnType<typeof makeLinkComponent>
  | ComponentType<LinkComponentProps>;

const DefaultLinkComponent = makeLinkComponent((props, ref) => (
  <a ref={ref} {...props} />
));

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
