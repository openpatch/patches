import { ReactNode, useContext } from "react";
import {
  LinkComponentContext,
  LinkComponentProvider,
  LinkComponentProviderProps,
} from "./LinkComponentProvider";
import { ThemeProvider, ThemeProviderProps } from "./ThemeProvider";

export type PatchesProviderProps = {
  children?: ReactNode;
} & ThemeProviderProps &
  Partial<LinkComponentProviderProps>;

export const PatchesProvider = ({
  children,
  theme,
  linkComponent,
}: PatchesProviderProps) => {
  const linkComponentFromContext = useContext(LinkComponentContext);
  return (
    <ThemeProvider theme={theme}>
      <LinkComponentProvider
        linkComponent={linkComponent || linkComponentFromContext}
      >
        {children}
      </LinkComponentProvider>
    </ThemeProvider>
  );
};
