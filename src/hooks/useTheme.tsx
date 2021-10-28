import { useTheme as useThemeEmotion } from "@emotion/react";
import { PartialDeep } from "type-fest";
import { Theme } from "../themes";

export const useTheme = (): [Theme, (theme: PartialDeep<Theme>) => void] => {
  const theme = useThemeEmotion();

  function setTheme() {}

  return [theme, setTheme];
};
