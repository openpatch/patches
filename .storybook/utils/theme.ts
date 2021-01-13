// @ts-nocheck
import { create } from "@storybook/theming/create";
import base from "../../src/themes/base";

export const theme = create({
  base: "light",
  brandTitle: "Patches",
  brandUrl: "https://github.com/openpatch/patches",
  brandImage: "patches_title.svg",
  fontBase: base.fonts.body,
  fontCode: base.fonts.monospace,
  colorPrimary: base.colors.primary[500],
  colorSecondary: base.colors.accent[500],
});
