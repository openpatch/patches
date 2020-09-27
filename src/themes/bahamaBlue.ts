import { Theme } from "./types";
import { bahamaBlue as primary } from "./colors";
import { PartialDeep } from "type-fest";

const theme: PartialDeep<Theme> = {
  colors: {
    primary,
  },
};

export default theme;
