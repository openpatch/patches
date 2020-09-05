import React from "react";
import { Global, css } from "@emotion/core";
import {
  Color,
  bahamaBlue,
  blueGrey,
  red,
  yellow,
  blue,
  mintGreen,
} from "../shared/colors";

import { Theme } from "./";

export function cssColor(color: Color, type: string): string {
  const css: Array<string> = [];

  Object.keys(color).forEach((key) => {
    css.push(`--color-${type}-${key}: ${color[key]};`);
  });

  return css.join("\n");
}

export interface GlobalCssThemeProps {
  theme: Theme;
}

export const GlobalCssTheme: React.FC<GlobalCssThemeProps> = ({ theme }) => {
  return (
    <Global
      styles={css`
        :root {
          ${cssColor(theme.colors.primary, "primary")}
          ${cssColor(theme.colors.neutrals, "neutrals")}
          ${cssColor(
            theme.colors.error,
            "error"
          )}
          ${cssColor(
            theme.colors.warning,
            "warning"
          )}
          ${cssColor(
            theme.colors.info,
            "info"
          )}
          ${cssColor(theme.colors.success, "success")}
        }
      `}
    ></Global>
  );
};
