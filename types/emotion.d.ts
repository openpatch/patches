import { Theme as PatchesTheme } from "../src/themes";

import "@emotion/react";
declare module "@emotion/react" {
  export interface Theme extends PatchesTheme {}
}
