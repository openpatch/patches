import _merge from "lodash/merge";
import { useState } from "react";
import { PartialDeep } from "type-fest";
import { baseTheme, Theme } from "../themes";

export const useTheme = (
  defaultTheme: PartialDeep<Theme> = {}
): [Theme, (theme: PartialDeep<Theme>) => void] => {
  const [theme, setTheme] = useState<Theme>(
    _merge({} as Theme, baseTheme, defaultTheme) as Theme
  );

  function mergeWithBase(theme: PartialDeep<Theme>) {
    setTheme(_merge({} as Theme, baseTheme, theme) as Theme);
  }

  return [theme, mergeWithBase];
};
