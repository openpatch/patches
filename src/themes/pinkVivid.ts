import { Theme } from "./types";
import { pinkVivid as primary } from "./colors";
import { coolGrey as neutral } from "./colors";
import { cyanVivid as info } from "./colors";
import { purpleVivid as accent } from "./colors";
import { redVivid as error } from "./colors";
import { teal as success } from "./colors";
import { yellowVivid as warning } from "./colors";
import { PartialDeep } from "type-fest";

const theme: PartialDeep<Theme> = {
  colors: {
    primary,
    neutral,
    accent,
    error,
    success,
    warning,
    info,
  },
};

export default theme;
