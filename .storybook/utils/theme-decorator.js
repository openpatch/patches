import React from "react";
import TUI from "../../src/themes/ThemeProvider";

import bahamaBlue from "../../src/themes/bahamaBlue";

export const ThemeProvider = ({ children, theme = bahamaBlue }) => (
  <TUI theme={theme}>{children}</TUI>
);

export default (story) => <ThemeProvider>{story()}</ThemeProvider>;
