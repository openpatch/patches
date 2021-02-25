import "@emotion/react";
import { Theme as PatchesTheme } from "../src/themes";

declare module "@emotion/react" {
  export interface Theme extends PatchesTheme {}
}
