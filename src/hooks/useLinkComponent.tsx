// see: https://github.com/seek-oss/braid-design-system/blob/master/lib/components/BraidProvider/BraidProvider.tsx
import { Ref, useContext } from "react";
import { LinkComponentContext } from "../LinkComponentProvider";

export type useLinkComponentProps = {};

export const useLinkComponent = (ref: Ref<HTMLAnchorElement>) => {
  const linkComponent = useContext(LinkComponentContext);

  if (ref && !("__forwardRef__" in linkComponent)) {
    throw new Error(
      `
      You're passing a ref to a Patches link, but your app is providing a custom link component to 'PatchesProvider' that doesn't appear to support refs.
      To fix this, you need to use Patches's 'makeLinkComponent' helper function when creating your custom link component. This ensures that refs are forwarded correctly, and allows us to silence this error message.
    `
    );
  }

  if ("__forwardRef__" in linkComponent) {
    return linkComponent.__forwardRef__;
  }

  return linkComponent;
};
