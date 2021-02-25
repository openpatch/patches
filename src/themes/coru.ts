import { Theme } from "@emotion/react";
import { coolGrey as primary } from "./colors";
import { lime as accent } from "./colors";
import { PartialDeep } from "type-fest";

const theme: PartialDeep<Theme> = {
  colors: {
    primary,
    accent,
  },
};

export default theme;
