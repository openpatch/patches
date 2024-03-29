import { ReactNode, useContext } from "react";
import {
  LinkComponentContext,
  LinkComponentProvider,
  LinkComponentProviderProps,
} from "./LinkComponentProvider";
import { NotificationsProvider } from "./NotificationsProvider";
import { ThemeProvider, ThemeProviderProps } from "./ThemeProvider";

export type PatchesProviderProps = {
  children?: ReactNode;
} & ThemeProviderProps &
  Partial<LinkComponentProviderProps>;

export const PatchesProvider = ({
  children,
  theme,
  linkComponent,
  standalone
}: PatchesProviderProps) => {
  const linkComponentFromContext = useContext(LinkComponentContext);
  return (
    <ThemeProvider theme={theme} standalone={standalone}>
      <NotificationsProvider>
        <LinkComponentProvider
          linkComponent={linkComponent || linkComponentFromContext}
        >
          {children}
        </LinkComponentProvider>
      </NotificationsProvider>
    </ThemeProvider>
  );
};
