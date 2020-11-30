import { useMedia } from "./useMedia";

export type usePrefersDarkModeProps = {};

export const usePrefersDarkMode = ({}: usePrefersDarkModeProps) => {
  return useMedia(["(prefers-color-scheme: dark"], [true], false);
};
