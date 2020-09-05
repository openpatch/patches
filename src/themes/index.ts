import { Color } from "../shared/colors";
import * as utils from "./utils";

export { utils };
export { default as base } from "./base";

export interface Theme {
  colors: {
    primary: Color;
    neutrals: Color;
    info: Color;
    warning: Color;
    error: Color;
    success: Color;
  };
}
