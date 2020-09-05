import React, { ReactElement } from "react";
import { ThemeProvider as EThemeProvider } from "emotion-theming";
import { Theme, base } from "./themes";
import { GlobalCssTheme } from "./themes/utils";

interface ThemeProviderProps {
  theme?: Theme;
  children: ReactElement;
}

const ThemeProvider = ({ theme = base, children }: ThemeProviderProps) => {
  return (
    <EThemeProvider theme={theme}>
      <GlobalCssTheme theme={theme} />
      {children}
    </EThemeProvider>
  );
};

export default ThemeProvider;
