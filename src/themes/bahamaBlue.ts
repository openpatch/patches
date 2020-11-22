import { Theme } from "@emotion/react";
import { bahamaBlue as primary } from "./colors";
import { PartialDeep } from "type-fest";

const theme: PartialDeep<Theme> = {
  colors: {
    primary,
  },
};

export default theme;
