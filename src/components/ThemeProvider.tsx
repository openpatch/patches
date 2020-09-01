import React, { ReactElement } from "react";
import {
  ThemeProvider as SCThemeProvider,
  DefaultTheme,
} from "styled-components";
import defaultTheme from "../shared/theme";

interface ThemeProviderProps {
  theme?: DefaultTheme;
  children: ReactElement;
}

const ThemeProvider = ({
  theme = defaultTheme,
  children,
}: ThemeProviderProps) => {
  return <SCThemeProvider theme={theme}>{children}</SCThemeProvider>;
};

export default ThemeProvider;
