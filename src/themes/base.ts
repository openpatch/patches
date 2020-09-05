import {
  blue,
  red,
  yellow,
  bahamaBlue,
  mintGreen,
  blueGrey,
} from "../shared/colors";
import { Theme } from "./";

const theme: Theme = {
  colors: {
    primary: bahamaBlue,
    neutrals: blueGrey,
    info: blue,
    error: red,
    warning: yellow,
    success: mintGreen,
  },
};

export default theme;
